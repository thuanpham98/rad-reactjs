export class ErrorModel {
  code: number | string;
  message: string | null | undefined;
  constructor({
    code,
    message,
  }: {
    code: number | null | undefined | string;
    message: string | null | undefined;
  }) {
    this.code = code ?? -1;
    this.message = message ?? "";
  }

  public copyWith({
    code,
    message,
  }: {
    code: number;
    message: string | null | undefined;
  }): ErrorModel {
    return new ErrorModel({
      code: code ?? this.code,
      message: message ?? this.message,
    });
  }
}
