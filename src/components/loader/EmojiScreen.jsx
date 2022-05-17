import { Emoji } from "./Emoji";

export function EmojiScreen() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-2xl">
      <Emoji />
    </div>
  );
}
