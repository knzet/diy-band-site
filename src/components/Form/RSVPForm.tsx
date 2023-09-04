import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Modal,
  Slider,
  Textarea,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { create } from "domain";
import { invalid } from "moment";
import { useState } from "react";
import { api } from "~/utils/api";

export default function RSVPForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const requestRsvp = api.rsvp.request.useMutation({
    onSuccess(input) {
      utils.rsvp.getMine.invalidate();
      setLoading(false);
      setOpen(false);
    },
  });
  const form = useForm({
    initialValues: {
      guests: 1,
      ageVerified: false,
    },

    validate: {
      ageVerified: (value) => {
        return value === true ? null : "You must be 21+ to attend";
      },
      guests: (value) => {
        if (value < 1) {
          return "You must bring at least one guest (yourself)";
        }
      },
    },
  });

  const utils = api.useContext();
  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-slate-500">
        Request
      </Button>
      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="RSVP to the show"
      >
        <Box maw={300} mx="auto">
          <form
            onSubmit={
              // () => {
              //   console.log("submitting");
              // }}
              form.onSubmit((values) => {
                console.log("123456");
                setLoading(true);
                const { guests, ageVerified } = values;
                requestRsvp.mutate({ guests: guests });
              })
            }
            // }
          >
            <NumberInput
              label="Number of guests (including yourself)"
              {...form.getInputProps("guests")}
            />
            <Group position="right" mt="md">
              <Checkbox
                label="All guests are 21+ and will bring their ID to show at the door"
                {...form.getInputProps("ageVerified")}
              />
              <Button
                className={"bg-slate-700"}
                type="submit"
                disabled={loading}
              >
                {loading ? "loading" : "Submit"}
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>
    </>
  );
}
