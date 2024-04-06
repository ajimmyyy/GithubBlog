import {
  Alert,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { CloseIssue } from "@/actions/close-issue";
import { SlTrash } from "react-icons/sl";
import { useState } from "react";
import { toast } from "sonner";

export default function CloseButton({issueNumber}: {issueNumber: number}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleIssueClose = () => {
    CloseIssue(issueNumber);
    setOpen(false);
    toast.success('Issue closed successfully');
  };
  
  return (
    <Tooltip
      content="delete article"
    >
      <>
        <Button 
          placeholder=""
          color="red"
          className="flex rounded-full gap-1 w-25 h-10"
          onClick={handleOpen}
        >
          <SlTrash size={15}/>
          close
        </Button>
        <Dialog placeholder="" open={open} handler={handleOpen}>
          <DialogHeader placeholder="">
            <Typography placeholder="" variant="h5" color="blue-gray">
              Your Attention is Required!
            </Typography>
          </DialogHeader>
          <DialogBody placeholder="" divider className="grid place-items-center gap-4">
            The issue will be closed. Are you sure you want to proceed?
          </DialogBody>
          <DialogFooter placeholder="" className="space-x-2">
            <Button placeholder="" variant="text" color="blue-gray" onClick={handleOpen}>
              cancle
            </Button>
            <Button
              placeholder=""
              variant="gradient"
              onClick={handleIssueClose}
            >
              Ok, Close it
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    </Tooltip>
  );
}