import BtnLogin from "@/components/BtnLogin";
import '@/style/login.css'
import Image from "next/image";

export default function login() {
    return (
        <main className="pagina-login">
            <section>
                <div className="secao-login">
                    <Image className="logo" src={'/salesforce-logo.svg'} alt="logo da salesforce" width={200} height={150}/>
                    <BtnLogin
                    textoBtn="Entrar na Salesforce"
                    linkBtn="https://login.salesforce.com/"
                    linkImg="/image-login/salesforce-logo-login.png"/>
                    <BtnLogin
                    textoBtn="Entrar no Trailhead"
                    linkImg="/image-login/simbolo-trailhead.png"
                    linkBtn="https://tbid.digital.salesforce.com/oauth2/aus5v9466wdqLdY0O697/v1/authorize?response_type=code&response_mode=query&nonce=7332f0fd-c326-4690-a6be-004c7fee45d8&client_id=0oa5v93ebgAGqkFSn697&redirect_uri=https%3A%2F%2Fiis.digital.salesforce.com%2Fservices%2Foauth2%2Fcallback&state=eyJyZWZlcnJlciI6Imh0dHBzOi8vdHJhaWxoZWFkLnNhbGVzZm9yY2UuY29tLyIsImNsaWVudElkIjoiM01WRzlnOXJic1RrS25BWFJVX2hPTHZIUllqN0hTMWNzTjBMbGhPU2VCUnY1TnAybXhQdXJjSWZmQTVWMHpuOC51SUR0Ym1YeVNXbXhxX1hkQTh3eCIsInJlZGlyZWN0VXJpIjoiaHR0cHM6Ly90cmFpbGhlYWQuc2FsZXNmb3JjZS5jb20vYXV0aC90YmlkbG9naW4vY2FsbGJhY2s_cHJvbXB0PWxvZ2luJmxvY2FsZT1lbl9VUyIsInN0YXRlIjoiNjVhM2EwZTk2ZDZhMGFkZGY4NWNiMjc1Y2YwYThmNmFmODk3MTViMGM5ZTllYzEzIiwiY29ycmVsYXRpb25JZCI6IjY1YmYxNDYzLWJkNmYtNGU2Ni1iZjJhLTY4MjdmZjAyZGM1YSIsInN0YXJ0VGltZSI6MTcxNDQyNTA3MDg4NiwiaWRwcyI6WyJJZFAgLSBHb29nbGUiLCJJZFAgLSBTYWxlc2ZvcmNlIiwiSWRQIC0gTXVsZXNvZnQtVVMiLCJJZFAgLSBNdWxlc29mdC1FVSIsIklkUCAtIFRhYmxlYXUiLCJJZFAgLSBMaW5rZWRpbiIsIklkUCAtIEFwcGxlIiwib3RwIl19&scope=openid+email+profile&intent=login"
                    />
                    <BtnLogin
                    textoBtn="Entrar no Marketing Cloud"
                    linkImg="/image-login/lupa-mk.png"
                    linkBtn=""
                    />
                </div>
            </section>
            <section className="img-login">
                <img src="/image-login/marquee-hero-foreground.webp" alt="" />
            </section>
        </main>
    )
}