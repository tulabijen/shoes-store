import Image from "next/image";
import loader from "@/assets/loader.gif"

const Loading = () => {
    return (
        <div style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        }}>
            <Image src={loader} alt='loading' height={160} width={160} />
        </div>
    )
}

export default Loading;