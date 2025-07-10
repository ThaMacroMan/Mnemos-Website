import { MeshBadge } from "@meshsdk/react";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-gray-400 flex flex-col items-center gap-2 border-t border-gray-700">
      <MeshBadge isDark={true} />
      <p className="text-xs">
        © {new Date().getFullYear()} Mnemos. All rights reserved.
      </p>
    </footer>
  );
}
