import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

// variant별 스타일
const variantStyles = {
  primary: "bg-red-400 text-white hover:bg-red-500", // 빨간색 배경
  secondary: "bg-gray-600 text-white hover:bg-gray-700", // 회색 배경
  outline: "border border-red-400 text-red-400 hover:bg-red-400", // 테두리만
  ghost: "text-gray-700 hover:bg-gray-100", // 배경 없음
};

// size별 스타일
const sizeStyles = {
  sm: "px-3 py-1.5 text-sm", // 작은 버튼
  md: "px-4 py-2 text-base", // 중간 버튼
  lg: "px-6 py-3 text-lg", // 큰 버튼
};

/**
 * 다양한 스타일과 크기를 지원하는 버튼 컴포넌트입니다.
 * href 속성이 있으면 Link 컴포넌트로, 없으면 button 태그로 렌더링됩니다.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded transition-colors font-medium";

  const classes = cn(
    baseClasses, // 기본 스타일
    variantStyles[variant], // variant 스타일
    sizeStyles[size], // 크기 스타일
    className // 추가 클래스
  );

  // href가 있으면 Link 컴포넌트로 렌더링
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // href가 없으면 일반 button 태그로 렌더링
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
