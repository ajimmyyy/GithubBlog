"use client";
import { FetchIssues } from "@/actions/fetch-issues";
import LoadMore from "@/components/issue/load-more";
import Issues from "@/components/issue/Issues";
import AddButton from "@/components/issue/add-button";
import { useEffect, useState } from "react";
import { IssueInfo } from "@/types/issue";
import { Card, CardHeader } from "@material-tailwind/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const [issues, setIssues] = useState<IssueInfo[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchIssues = async () => {
      const newIssues = await FetchIssues(1);
      setIssues(newIssues);
    };
    fetchIssues();
  }, []);

  const handleAddData = (added: boolean) => {
    if (added) {
      fetchIssues();
    }
  };

  const fetchIssues = async () => {
    const newIssues = await FetchIssues(1);
    setIssues(newIssues);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-2">
        {session && (
          <Card placeholder="" color="blue-gray" variant="gradient" className="w-[20rem]">
            <CardHeader
              placeholder=""
              floated={false}
              shadow={false}
              color="transparent"
              className="rounded-none pb-4 text-center"
            >
              <AddButton onAdd={handleAddData}/>
            </CardHeader>
          </Card>
        )}
        <Issues issues={issues} />
        <LoadMore />
      </div>
    </>
  );
}
