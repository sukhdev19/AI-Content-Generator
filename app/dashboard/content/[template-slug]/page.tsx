"use client";
import React, { useState } from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment"; // Import moment for date formatting

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const { user } = useUser();

  // const {total,setTotalUsage}=useContext(TotalUsageContext)

  const GeneratedAIContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt || ""; // Provide default empty string

    const FinalAIPrompt = JSON.stringify(formData) + "," + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    const responseText = await result?.response.text(); // Await for the text
    setAiOutput(responseText);
    await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug || "", responseText);
    setLoading(false);
  };

  // Removed "createdBy" from here
  const SaveInDb = async (formData: any, slug: string, aiResp: string) => {
    // Get user's email, fallback to "unknown" or some default value if the user is not available
    const email = user?.primaryEmailAddress?.emailAddress || "guest";  // Provide a default value in case user is null
  
    const result = await db.insert(AIOutput).values({
      formData: formData || "",  // Ensure formData is not undefined
      templateSlug: slug || "",  // Ensure slug is not undefined
      aiResponse: aiResp || "",  // Ensure aiResponse is not undefined
      createdBy: email,  // Use user's email, or fallback to "guest"
      createdAt: moment().format("DD/MM/YY"),  // Format the createdAt date
    });
  
    console.log(result);
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GeneratedAIContent(v)}
          loading={loading}
        />
        {/* outputsection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
