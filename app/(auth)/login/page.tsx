import LoginForm from "@/modules/Auth/login-form/LoginForm";

export default function LoginPage () {
    return (
        <>
            <div className="flex justify-center items-center h-dvh" style={{ backgroundImage: 'url("/images/auth/bg_auth.svg")'}}>
                <div className="rounded-xl h-[40rem] w-[30rem] bg-white shadow-xl ">
                    <LoginForm/>
                </div>
            </div>
        </>
    )
}