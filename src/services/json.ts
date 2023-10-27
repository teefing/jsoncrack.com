import { PostgrestSingleResponse } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { supabase } from "src/lib/api/supabase";
import { File } from "src/store/useFile";
import { FileFormat } from "src/types/models";

type CloudSave = {
  id?: string;
  contents: string;
  format: FileFormat;
};

const saveToCloud = async ({
  id: p_id = "",
  contents: p_content,
  format: p_format = FileFormat.JSON,
}: CloudSave): Promise<PostgrestSingleResponse<string>> => {
  return await supabase.rpc("upsert_document", {
    p_content,
    p_format,
    p_id,
  });
};

const getFromCloud = async (doc_id: string): Promise<PostgrestSingleResponse<File[]>> => {
  return await supabase.rpc("get_document_by_id", { doc_id });
};

const updateJson = async (id: string, data: object) => {
  return await supabase.from("document").update(data).eq("id", id).select("private");
};

const deleteJson = async (id: string) => await supabase.from("document").delete().eq("id", id);

export { saveToCloud, getFromCloud, updateJson, deleteJson };
