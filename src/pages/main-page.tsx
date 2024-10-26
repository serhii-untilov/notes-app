import { ErrorDisplay } from "../components/error-display";
import { useLoadNoteList } from "../hooks/useLoadNoteList"
import { LoadingDisplay } from "../components/loading-display";
import { MainForm } from "./main-form";

export function MainPage() {
    const { data, isLoading, isError, error } = useLoadNoteList();

    return <>
        {isError && <ErrorDisplay error={error} />}
        {isLoading && <LoadingDisplay />}
        {data && <MainForm data={data} />}
    </>
}
