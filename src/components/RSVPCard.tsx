import { Button } from "@mui/material";
import { Card } from "@mantine/core";
import classNames from "classnames";
import moment, { invalid } from "moment";
import { api } from "~/utils/api";
import { createRecursiveProxy } from "@trpc/server/shared";
import { useState } from "react";
import EditRsvpForm from "./Form/EditRsvpForm";

export default function RSVPCard({ rsvp }: { rsvp: any }) {
  const utils = api.useContext();
  const [loading, setLoading] = useState(false)
  const { mutate: approveRsvp } = api.rsvp.approveById.useMutation({
    onSuccess: () => {
      utils.rsvp.getAll.invalidate();
      setLoading(false)
    },
  });

  const { mutate: rejectRsvp } = api.rsvp.rejectById.useMutation({
    onSuccess: () => {
      utils.rsvp.getAll.invalidate();
      setLoading(false)

    },
  });

  const color = rsvp.approved
    ? "bg-green-200"
    : rsvp.rejected
      ? "red"
      : "yellow";
  return (
    <Card className={classNames("mx-auto my-3 grid w-max sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-3", {
      'bg-amber-300': !rsvp.approved && !rsvp.rejected,
      'bg-green-400': rsvp.approved && !rsvp.rejected,
      'bg-red-400': rsvp.rejected && !rsvp.approved
    })}><div></div>
      <EditRsvpForm rsvp={rsvp} />
      <div>name:</div>
      <div>{rsvp.name}</div>
      {/* <div>email:</div>
      <div>{rsvp.email}</div> */}
      <div>guests:</div>
      <div>{rsvp.guests}</div>
      <div>requested date:</div>
      <div>{moment(rsvp.requested_date).toLocaleString()}</div>
      <div>status:</div>
      <div>{rsvp.approved ? 'approved' : rsvp.rejected ? 'rejected' : 'pending'}</div>
      <div>cover required:</div>
      <div>{rsvp.coverRequired === true ? "true" : 'false'}</div>
      {rsvp.message && <div>message:</div>}
      {rsvp.message && <div>{rsvp.message}</div>}
      <div className='grid grid-cols-2'>
        <Button onClick={() => {
          setLoading(true)
          approveRsvp({ id: rsvp.id })
        }}>Approve</Button>
        <Button onClick={() => {
          setLoading(true)
          rejectRsvp({ id: rsvp.id })
        }}>Deny</Button></div>
    </Card>
  );
}
