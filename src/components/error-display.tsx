
export type ErrorMessage = {
    code?: string;
    message?: string;
};

type Props = { error: ErrorMessage }

export function ErrorDisplay({ error }: Props) {
    return <p>{error.message ?? error.code ?? 'Unknown error'}</p>
}
