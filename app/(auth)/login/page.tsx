import LoginForm from "@/modules/Auth/login-form/LoginForm";


export default function LoginPage () {
    return (
        <>
            <div className="flex justify-center items-center h-dvh bg-contain bg-no-repeat bg-center" style={{ backgroundImage: 'url("/images/auth/bg_auth.webp")'}}>
                <div className="rounded-xl h-fit w-[30rem] bg-white shadow-xl ">
                    <LoginForm/>
                </div>
            </div>
        </>
    )
}