import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Modal,
  Slider,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { create } from "domain";
import { useState } from "react";
import { api } from "~/utils/api";

export default function CreateBlogPostForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const createPost = api.blogPost.create.useMutation({
    onSuccess(input) {
      utils.blogPost.getAll.invalidate();
      setLoading(false);
      setOpen(false);
      form.reset();
    },
  });
  const form = useForm({
    initialValues: {
      title: "",
      content: "",
      published: false,
    },

    validate: {
      title: (value) =>
        value.length > 1 ? null : "Title must be longer than 1 character",
    },
  });

  const utils = api.useContext();
  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-slate-500">
        Create
      </Button>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create Blog Post">
        <Box maw={300} mx="auto">
          <form
            onSubmit={form.onSubmit((values) => {
              setLoading(true);
              createPost.mutate(values);
            })}
          >
            <TextInput
              withAsterisk
              label="Title"
              placeholder="new blog post"
              {...form.getInputProps("title")}
            />
            <Textarea
              withAsterisk
              label="Content"
              placeholder="lorem ipsum"
              {...form.getInputProps("content")}
            />
            <Group position="right" mt="md">
              <Checkbox
                label="Publish immediately?"
                {...form.getInputProps("published")}
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
