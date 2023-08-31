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
import { IconTrash } from "@tabler/icons-react";
import { create } from "domain";
import { useState } from "react";
import { api } from "~/utils/api";

export default function DeleteBlogPostForm({ post }: { post: BlogPost }) {
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
  const unpub = api.blogPost.unPublish.useMutation({
    onSuccess: () => {
      utils.blogPost.getAll.invalidate();
      setOpen(false);
    },
  });
  return (
    <>
      <Button onClick={() => setOpen(true)} className="mx-2 bg-slate-600">
        Delete <IconTrash />
      </Button>
      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="Delete Blog Post"
      >
        <p>Are you sure you want to delete this post?</p>
        <Button
          className="m-2 bg-slate-600"
          onClick={(e) => {
            // e.preventDefault();
            unpub.mutate({ id: post.id });
            setOpen(false);
          }}
        >
          Delete
        </Button>
      </Modal>
    </>
  );
}
