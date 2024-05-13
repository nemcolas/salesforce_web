'use client'
import BtnLogin from "@/components/BtnLogin";
import '@/style/login.css'
import Image from "next/image";
import { useEffect } from "react";

export default function Login() {
    useEffect(() => {
        if (window.innerWidth > 650) {
            const primeiroBtn: any = document.querySelector('a.btn-login')
            if (primeiroBtn) primeiroBtn.focus()
        }
    }, [])
    return (
        <main className="pagina-login">
            <section className="secao-login">
                <Image className="logo" src={'/salesforce-logo.svg'} alt="logo da salesforce" width={200} height={150} />
                <BtnLogin
                    altImg="Nuvem azul que representa o Salesforce"
                    textoBtn="Entrar na Salesforce"
                    linkBtn="https://login.salesforce.com/"
                    linkImg="/image-login/salesforce-logo-login.png"
                />
                <BtnLogin
                    altImg="Simbolo do Trailhead com um trilho de trem e uma montanha ao fundo"
                    textoBtn="Entrar no Trailhead"
                    linkImg="/image-login/simbolo-trailhead.png"
                    linkBtn="https://tbid.digital.salesforce.com/oauth2/aus5v9466wdqLdY0O697/v1/authorize?response_type=code&response_mode=query&nonce=7332f0fd-c326-4690-a6be-004c7fee45d8&client_id=0oa5v93ebgAGqkFSn697&redirect_uri=https%3A%2F%2Fiis.digital.salesforce.com%2Fservices%2Foauth2%2Fcallback&state=eyJyZWZlcnJlciI6Imh0dHBzOi8vdHJhaWxoZWFkLnNhbGVzZm9yY2UuY29tLyIsImNsaWVudElkIjoiM01WRzlnOXJic1RrS25BWFJVX2hPTHZIUllqN0hTMWNzTjBMbGhPU2VCUnY1TnAybXhQdXJjSWZmQTVWMHpuOC51SUR0Ym1YeVNXbXhxX1hkQTh3eCIsInJlZGlyZWN0VXJpIjoiaHR0cHM6Ly90cmFpbGhlYWQuc2FsZXNmb3JjZS5jb20vYXV0aC90YmlkbG9naW4vY2FsbGJhY2s_cHJvbXB0PWxvZ2luJmxvY2FsZT1lbl9VUyIsInN0YXRlIjoiNjVhM2EwZTk2ZDZhMGFkZGY4NWNiMjc1Y2YwYThmNmFmODk3MTViMGM5ZTllYzEzIiwiY29ycmVsYXRpb25JZCI6IjY1YmYxNDYzLWJkNmYtNGU2Ni1iZjJhLTY4MjdmZjAyZGM1YSIsInN0YXJ0VGltZSI6MTcxNDQyNTA3MDg4NiwiaWRwcyI6WyJJZFAgLSBHb29nbGUiLCJJZFAgLSBTYWxlc2ZvcmNlIiwiSWRQIC0gTXVsZXNvZnQtVVMiLCJJZFAgLSBNdWxlc29mdC1FVSIsIklkUCAtIFRhYmxlYXUiLCJJZFAgLSBMaW5rZWRpbiIsIklkUCAtIEFwcGxlIiwib3RwIl19&scope=openid+email+profile&intent=login"
                />
                <BtnLogin
                    altImg="Lupa na cor laranja com um fundo branco"
                    textoBtn="Entrar no Marketing Cloud"
                    linkImg="/image-login/lupa-mk.png"
                    linkBtn="https://mc.login.exacttarget.com/hub-cas/login?service=https%3a%2f%2fauth.exacttargetapis.com%2fv2%2fauthorize%3fclient_id%3dhbw6vmsadg5epio6bd1eg4uc%26redirect_uri%3dhttps%253A%252F%252Fmc.exacttarget.com%252Fcloud%252Fauth_redirect%26response_type%3dcode%26state%3deyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpemVTdGFydFRpbWUiOjE3MTQ4NTY2Njc1NzMsImtleSI6InNBN25KNV9GMTh3T2hicFdtaUpoNSIsInJlZGlyZWN0SGFuZGxlciI6Imh0dHBzOi8vbWMuZXhhY3R0YXJnZXQuY29tL2Nsb3VkL2F1dGhfcmVkaXJlY3QiLCJyZWRpcmVjdFVyaSI6Imh0dHBzOi8vbWMuZXhhY3R0YXJnZXQuY29tL2Nsb3VkLz9oYXNoPWxvZ2dlZC1pbkl3PT0ifQ.GBC_fll6r7Cb8TJZnyZ2J4VmAcnREpAMUJuvZykWPFU"
                />
            </section>
        </main>
    )
}