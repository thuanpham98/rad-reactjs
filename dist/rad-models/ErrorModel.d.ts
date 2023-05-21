export declare class ErrorModel {
    code: number | string;
    message: string | null | undefined;
    constructor({ code, message, }: {
        code: number | null | undefined | string;
        message: string | null | undefined;
    });
    copyWith({ code, message, }: {
        code: number;
        message: string | null | undefined;
    }): ErrorModel;
}
