/**
 * 클래스명을 병합하는 유틸리티 함수입니다.
 * 조건부 클래스 적용 및 여러 클래스를 하나로 합칠 때 사용합니다.
 *
 * @param classes - 병합할 클래스명 목록 (falsy 값은 무시됨)
 * @returns 병합된 클래스 문자열
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
