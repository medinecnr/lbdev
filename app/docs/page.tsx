"use client";
import { title } from "@/components/primitives";
import Yanpanel from "@/components/yanpanel";

export default function DocsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 ps-9">
      <Yanpanel />
      <div>
        <h1 className={title()}>Docs</h1>
      </div>
    </div>
  );
}
