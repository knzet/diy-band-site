import { Button } from "@mui/material";
import { Card } from "@mantine/core";
import classNames from "classnames";
import moment, { invalid } from "moment";
import { api } from "~/utils/api";

export default function RSVPCard({ rsvp }: { rsvp: any }) {
  const utils = api.useContext();

  const { mutate: approveRsvp } = api.rsvp.approveById.useMutation({
    onSuccess: () => {
      utils.rsvp.getAll.invalidate();
    },
  });

  const { mutate: rejectRsvp } = api.rsvp.rejectById.useMutation({
    onSuccess: () => {
      utils.rsvp.getAll.invalidate();
    },
  });

  const color = rsvp.approved
    ? "bg-green-200"
    : rsvp.rejected
    ? "red"
    : "yellow";
  return (
    <Card className={"bg-red mx-auto my-3 grid w-max grid-cols-2 p-3 bg-red"}>
      <div>name:</div>
      <div>{rsvp.name}</div>
      <div>email:</div>
      <div>{rsvp.email}</div>
      <div>guests:</div>
      <div>{rsvp.guests}</div>
      <div>cover required:</div>
      <div>{rsvp.coverRequired === true ? "true" : false}</div>
      <div>requested date:</div>
      <div>{moment(rsvp.requested_date).toLocaleString()}</div>
      <Button onClick={() => approveRsvp({ id: rsvp.id })}>Approve</Button>
      <Button onClick={() => rejectRsvp({ id: rsvp.id })}>Deny</Button>
    </Card>
  );
}
