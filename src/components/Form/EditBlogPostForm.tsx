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
import { BlogPost } from "@prisma/client";
import { IconPencil } from "@tabler/icons-react";
import { create } from "domain";
import { useState } from "react";
import { api } from "~/utils/api";

export default function EditBlogPostForm({ post }: { post: BlogPost }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const editPost = api.blogPost.edit.useMutation({
    onSuccess(input) {
      utils.blogPost.getAll.invalidate();
      utils.blogPost.getOne.invalidate({ id: post.id });
      setLoading(false);
      setOpen(false);
      // form.reset();
    },
  });
  const form = useForm({
    initialValues: {
      title: post.title,
      content: post.content,
      published: post.published,
    },

    validate: {
      title: (value) =>
        value.length > 1 ? null : "Title must be longer than 1 character",
    },
  });
  const utils = api.useContext();
  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-slate-600 mx-2">
        Edit <IconPencil/>
      </Button>
      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="Create Blog Post"
      >
        <Box maw={300} mx="auto">
          <form
            onSubmit={form.onSubmit((values) => {
              setLoading(true);
              editPost.mutate({ id: post.id, ...values });
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
              {/* <Checkbox
                label="Publish immediately?"
                {...form.getInputProps("published")}
              /> */}
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
