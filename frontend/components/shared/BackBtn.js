import { useRouter } from "next/router";

export default function BackBtn() {
    const Router = useRouter();
    const handleBack = () => Router.back();
    return (
        <button type='button' className='BackBtn' onClick={handleBack}>Go Back</button>
    )
}
