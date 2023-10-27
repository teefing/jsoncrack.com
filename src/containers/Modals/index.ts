export { ClearModal } from "./ClearModal";
export { DownloadModal } from "./DownloadModal";
export { ImportModal } from "./ImportModal";
export { NodeModal } from "./NodeModal";
export { SettingsModal } from "./SettingsModal";
export { JWTModal } from "./JWTModal";
export { SchemaModal } from "./SchemaModal";
export { ReviewModal } from "./ReviewModal";
export { JQModal } from "./JQModal";

type Modal =
  | "clear"
  | "download"
  | "import"
  | "node"
  | "settings"
  | "jwt"
  | "schema"
  | "review"
  | "jq";

export type { Modal };
