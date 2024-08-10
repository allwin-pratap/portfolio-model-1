export default function WorkHighLights(props: any) {
    return (
        <div className={props?.layoutStyle}>
            <p className={`mx-auto max-w-[600px] text-lg opacity-80`}>
                {props?.title}
            </p>
        </div>
    );
}