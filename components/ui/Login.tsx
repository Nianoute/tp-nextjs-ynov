import Image from "next/image";
import Link from "next/link";

type LoginType = {
  size?: number;
  color?: "dark" | "light";
};

export default function Login({ size = 24, color = "dark" }: LoginType) {
  return (
    <Link href="/profile">
      <Image
        src={color == "dark" ? "/login.svg" : "/login-light.svg"}
        alt="login"
        width="24"
        height="24"
        style={{ width: size }}
      />
    </Link>
  );
}
