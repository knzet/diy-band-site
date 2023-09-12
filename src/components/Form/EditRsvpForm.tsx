import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Modal,
  Switch,
  Textarea,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Rsvp } from "@prisma/client";
import { IconPencil } from "@tabler/icons-react";
import { create } from "domain";
import { useState } from "react";
import { api } from "~/utils/api";

export default function EditRsvpForm({ rsvp }: { rsvp: Rsvp }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log({ rsvp })
  const editRsvp = api.rsvp.edit.useMutation({
    onSuccess(input) {
      utils.rsvp.getAll.invalidate();
      // utils.rsvp.getOne.invalidate({ id: rsvp.id });
      setLoading(false);
      setOpen(false);
      // form.reset();
    },
  });
  const form = useForm({
    initialValues: {
      coverRequired: rsvp.coverRequired,
      guests: rsvp.guests,
      message: rsvp.message
    },

    validate: {
      // coverRequired: (value) => console.log({ value })
    },
  });
  const utils = api.useContext();
  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-slate-600 mx-2">
        Edit <IconPencil />
      </Button>
      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="Create Blog rsvp"
      >
        <Box maw={300} mx="auto">
          <form
            onSubmit={form.onSubmit((values) => {
              setLoading(true);
              editRsvp.mutate({ id: rsvp.id, message: values.message as string, guests: values.guests as unknown as number, coverRequired: values.coverRequired });
            })}
          >
            <NumberInput
              label="Guests"
              placeholder="new rsvp"
              {...form.getInputProps("guests")}
            />
            <Textarea
              label="Message"
              placeholder="lorem ipsum"
              {...form.getInputProps("message")}
            />
            <Group position="right" mt="md">
              <Switch
                size="md"
                checked={form.getInputProps("coverRequired").value}
                label="Cover Required?"
                {...form.getInputProps("coverRequired")}
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
