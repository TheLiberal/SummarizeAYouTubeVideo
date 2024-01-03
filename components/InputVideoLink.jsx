import { Input } from "@/components/ui/Input";

export function InputVideoLink() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[200px]">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold uppercase tracking-wide text-gray-700" htmlFor="public-url">
            Public URL of video or audio
          </label>
          <Input className="border-gray-300" id="public-url" placeholder="https://youtube.com/example" type="text" />
        </div>
      </div>
    </div>
  );
}
