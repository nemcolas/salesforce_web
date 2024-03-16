import Login from '../../components/login/'

export default function login() {
    return (
        <main>
            <Login typeLogin='Salesforce'
                imgLogin='/image-login/salesforce.webp' linkButton='https://login.salesforce.com/?locale=br' paragraph='
                Acesse a plataforma principal da Salesforce para gerenciar relacionamentos com clientes, vendas, serviços e mais' altImgLogin='' />

            <Login typeLogin='Marketing Cloud'
                imgLogin='/image-login/SFMC-.webp' linkButton='https://mc.login.exacttarget.com/hub-cas/login?service=https%3a%2f%2fauth.exacttargetapis.com%2fv2%2fauthorize%3fclient_id%3dhbw6vmsadg5epio6bd1eg4uc%26redirect_uri%3dhttps%253A%252F%252Fmc.exacttarget.com%252Fcloud%252Fauth_redirect%26response_type%3dcode%26state%3deyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpemVTdGFydFRpbWUiOjE3MTA1ODk3NDgyMjAsImtleSI6IjFaaXYzdU93TnlNN2lpdThCMHdhcyIsInJlZGlyZWN0SGFuZGxlciI6Imh0dHBzOi8vbWMuZXhhY3R0YXJnZXQuY29tL2Nsb3VkL2F1dGhfcmVkaXJlY3QiLCJyZWRpcmVjdFVyaSI6Imh0dHBzOi8vbWMuZXhhY3R0YXJnZXQuY29tL2Nsb3VkLz9oYXNoPWxvZ2dlZC1pbkl3PT0ifQ.uSdAA_ixlxFb_w782RlzxpvS9FripN1yz5k40JVJDUc' paragraph='Acesse a plataforma de marketing da Salesforce para criar, gerenciar e otimizar campanhas multicanal' altImgLogin='' />

            <Login typeLogin='Trailblazer'
                imgLogin='/image-login/trailblazer.webp' linkButton='https://login.salesforce.com/?locale=br' paragraph='Acesse recursos para profissionais de tecnologia, incluindo aprendizado, certificação, networking e desenvolvimento de carreira' altImgLogin='' />
        </main>
    )
}