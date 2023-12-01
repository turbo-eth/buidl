import { ErrorMessage } from "@/registry/default/buidl/error-message"

export default function ErrorMessageDemo() {
  return <ErrorMessage error={Error("Error while fetching data")} />
}
