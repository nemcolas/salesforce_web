import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for all other ports
  auth: {
    user: "challengesalesforcefiap@gmail.com",
    pass: "q k k a x j f s t h n m g c h c",
  },
});



export const getConfig = (email: string, nome: string) => {
  const message = 
`
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="PT" xml:lang="PT">
  <head></head>
  <head>
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="format-detection" content="telephone=no">
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <style type="text/css">
      #outlook a {padding: 0}
      h1, h2, h3, h4, h5, h6, p {margin:0;padding:0;border:0;outline:0;font-weight:normal;font-size:100%;font-family:inherit;vertical-align:baseline}
      body,table,td,th {-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%}
      table,td,th { mso-table-lspace: 0pt; mso-table-rspace: 0pt}
      td,th{margin: 0;padding: 0;font-weight: normal}
      img {border: 0; line-height: 100%; outline: none; text-decoration: none}
      table {border-collapse: collapse !important;}
      body {height: 100% !important; margin: 0 auto !important; padding: 0 !important; width: 100% !important}
      .gmailfix {display:none;display:none!important;}
      a[x-apple-data-detectors] {color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important}
      .mobileLinks a {color:inherit !important; text-decoration:none !important} /* Wrap phone numbers, date, address with <span class="mobileLinks"> */
      u + .body .gmailfix {display: none !important}
      u + .body a {color: inherit;text-decoration: none;font-size: inherit;font-family: inherit;font-weight: inherit;line-height: inherit;} /* CHECK */
      
      .BKG_transparent {background-image: url('https://image.mail.salesforce.com/lib/fea31c727564047c74/m/2/BKG_hero_tile.png') !important; background-repeat: repeat !important;}
    </style>
    <style type="text/css">
      @-ms-viewport {width: device-width}
      span.MsoHyperlink {mso-style-priority:99;color:inherit;}
      span.MsoHyperlinkFollowed {mso-style-priority:99;color:inherit;}
    </style>
    <!--[if mso]>
    <style type="text/css">
      body, table, td, th, p, h1, h2, h3, h4, span {font-family: Helvetica, Arial, sans-serif !important}
      table {border-collapse:collapse !important}
      a {text-decoration:none !important}
      span.underline {text-decoration:underline !important}
      li {text-indent: -1em;} /* Normalise space between bullets and text */
      td.MS_CTAcolor {background-color:#0176d3 !important;}
      .o_h52 {height: 52px !important}
      <link href="#" rel="stylesheet">
    </style>
    <![endif]-->
    <style type="text/css">
      @media only screen and (max-width: 480px) {
      u + .body .center_iOS {min-width: 100vw}
      .w100pc {width: 100% !important}
      .w90pc {width: 90% !important}
      .w80pc {width: 80% !important}
      .w70pc {width:70% !important}
      .w60pc {width:60% !important}
      .w50pc {width:50% !important}
      .w10 {width:10px !important}
      .w64 {width:64px !important}
      .wauto {width: auto !important}
    
      .h20 {height: 20px !important}
      .h44 {height: 44px !important}
      .h52 {height: 52px !important}
      .hauto {height: auto !important}
      .h200max {max-height: 200px !important}
    
      .mobileHide {display: none !important}
      .mobileShow {display: block !important;max-height: none !important}
      .mobileShow_text {display: table-row !important;max-height: none !important}
      .mobileIMG {display: inline-block !important;}
      .block {display: block !important; width: 100% !important}
    
      .aligncenter {text-align: center !important}
      .alignleft {text-align: left !important}
      .alignright {text-align: right !important}
      .alignmiddle {vertical-align: middle !important}
    
      .f28 {font-size: 28px !important; line-height: 32px !important}
      .c_032d60 {color:#032d60 !important}
    
      .BKG_hero {background-image: none !important; height: auto !important}
      .BKG_none {background-image:none !important; height:auto !important}
      .BKG_mob {background-size: 480px auto !important; height: auto !important}
      .BKG_webinar {background-size: 100% auto !important}
      .BKG_cover {background-size: cover !important}
      .BKG_clear {background-color: transparent !important}
      .BKG_00a1e0 {background-color:#00a1e0 !important}
      .BKG_ffffff {background-color: #fffffe !important}
      .BKG_fffffe {background-color: #fffffe !important}
      .BKG_009cdb {background-color:#009cdb !important}
      .BKG_e1e2 {background-image: url('http://image.mail.salesforce.com/lib/fe981c727564047b72/m/20/e1-e2_mob_BG_8x800.png');background-repeat: repeat-x; background-position: bottom left;background-color:#fffffe}
    
      .p_reset {padding-bottom: 0 !important;padding-left: 0 !important;padding-right: 0 !important;padding-top: 0 !important}
      .pb0 {padding-bottom:0 !important}
      .pb10 {padding-bottom:10px !important}
      .pb16 {padding-bottom:16px !important}
      .pb20 {padding-bottom:20px !important}
      .pb24 {padding-bottom:24px !important}
      .pb30 {padding-bottom:30px !important}
      .pb35 {padding-bottom:35px !important}
      .pb36 {padding-bottom:36px !important}
      .pb40 {padding-bottom:40px !important}
      .pl0 {padding-left:0 !important}
      .pl10 {padding-left:10px !important}
      .pl16 {padding-left:16px !important}
      .pl20 {padding-left:20px !important}
      .pr0 {padding-right:0 !important}
      .pr10 {padding-right:10px !important}
      .pr16 {padding-right:16px !important}
      .pr20 {padding-right:20px !important}
      .pt0 {padding-top:0 !important}
      .pt10 {padding-top:10px !important}
      .pt16 {padding-top:16px !important}
      .pt20 {padding-top:20px !important}
      .pt24 {padding-top:24px !important}
      .pt30 {padding-top:30px !important}
      .pt36 {padding-top:36px !important}
      .pt40 {padding-top:40px !important}
    
      .mlr20 {margin: 0 20px 0 20px !important}
    
      .CTA_mobile a {border: none !important}
      .CTA_mobileReverse {color:#0077bb !important;background-color:#ffffff !important}
      .CTA_0176d3 a {background-color:#0176d3 !important; color:#fffffe !important; border-color:#0176d3 !important}
      }
      @media screen and (-webkit-min-device-pixel-ratio: 0), screen and (min--moz-device-pixel-ratio: 0) {
      .font_normal {font-weight: normal !important;}
      [class="x_font_normal"] {font-weight: bold !important}
      }
      @media only screen and (max-width: 390px) {
      .block320 {display: block !important}
      }
    </style>
    <style type="text/css">
      @media {
      @font-face{font-family:'SalesforceSansBold';src:url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Bold.eot');src:url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Bold.eot?#iefix') format('embedded-opentype'),url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Bold.woff') format('woff'),url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Bold.woff2') format('woff2'),url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Bold.ttf')
 format('truetype'),url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Bold.svg#SalesforceSansBold')
      format('svg');font-weight:normal;font-style:normal}
      @font-face{font-family:'SalesforceSansRegular';src:url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Regular.eot');src:url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Regular.eot?#iefix') format('embedded-opentype'),url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Regular.woff') format('woff'),url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Regular.woff2') format('woff2'),url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Regular.ttf')
      format('truetype'),url('https://c1.sfdcstatic.com/etc/clientlibs/sfdc-aem-master/clientlibs_base/fonts/SalesforceSans-Regular.svg#SalesforceSansRegular') format('svg');font-weight:normal;font-style:normal}
      @font-face{font-family:'ITC Avant Garde Demi'; src:url('https://image.mail.salesforce.com/lib/fe981c727564047b72/m/24/ITCAvantGardePro-Demi-w.woff') format('woff'),url('https://image.mail.salesforce.com/lib/fe981c727564047b72/m/24/ITCAvantGardePro-Demi-w2.woff2') format('woff2'),url('https://image.mail.salesforce.com/lib/fe981c727564047b72/m/24/ITCAvantGardePro-Demi.ttf') format('truetype');font-weight:600;font-style:normal}
      }
    </style>
  </head>
  <body bgcolor="#ffffff" style="margin: 0 auto; padding:0; -webkit-text-size-adjust:none; -ms-text-size-adjust: none;" class="body">
    <style>@media yahoo {.yahooHide {display: none !important}}</style>
    <!--Pre-header-->
    <div lang="PT" role="article" aria-label="Teste gratuito: O CRM para PMEs">
    
            <!--DOUGLAS FIR - narrow-->
      <table role="presentation" width="100%" bgcolor="#fffffe" border="0" cellspacing="0" cellpadding="0" class="center_iOS">
        <tr>
          <td align="center" valign="top" style="padding-bottom:40px">
            <!--Primary offer content-->
            <table role="presentation" align="center" bgcolor="#fffffe" cellpadding="0" cellspacing="0" border="0" style="width:800px" class="w100pc">
              <!--Logo-->
              <tr>
                <td align="center" valign="bottom" style="padding-top:8px; padding-bottom:8px"><a href="https://www.salesforce.com/br/"  target="_blank" style="text-decoration:none"><img src="https://image.mail.salesforce.com/lib/fea31c727564047c74/m/3/SFDC_Logo_216x156_0d9dda.png" alt="logo Salesforce" height="52" style="font-family:Salesforce Sans, Arial, Helvetica, sans-serif; color:#0d9dda;font-size:16px;height:52px;display:block;border:none"></a></td>
              </tr>
              <!--end Logo-->
              <tr>
                <td align="center" valign="bottom" width="800" height="352" background="https://image.mail.salesforce.com/lib/fea31c727564047c74/m/1/a0U7y000003qoJxEAI_DouglasFir-Background-Hero-Image-1.png" style="background-image: url('https://image.mail.salesforce.com/lib/fea31c727564047c74/m/1/a0U7y000003qoJxEAI_DouglasFir-Background-Hero-Image-1.png');background-position:bottom center; background-repeat:no-repeat; width:800px;height:352px;background-size:800px 352px;background-color:#fffffe" class="w100pc hauto BKG_cover">
                  <!--[if gte mso 9]>
                  <v:image xmlns:v="urn:schemas-microsoft-com:vml" id="theImage" style="behavior: url(#default#VML); display:inline-block; position:absolute; width:800px;height:352px; top:0; left:0; border:0; z-index:1;" src="https://image.mail.salesforce.com/lib/fea31c727564047c74/m/1/a0U7y000003qoJxEAI_DouglasFir-Background-Hero-Image-1.png" />
                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="display:inline-block; position:absolute; width:800px;height:352px; top:0; left:0; border:0; z-index:2;">
                    <v:fill opacity="0%" style="z-index: 1;"/>
                    <div>
                      <![endif]-->
                      <! -- Parte de cima -->
                      <table role="presentation" align="center" width="496" border="0" cellspacing="0" cellpadding="0" style="width:496px" class="w90pc">
                        <tr>
                          <td align="center" valign="middle" height="112" style="font-family: 'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif;font-weight: normal;height:112px; vertical-align:middle;" class="hauto pt10 pb24">
                            <h1 style="font-family:'ITC Avant Garde Demi', Helvetica, Arial, sans-serif; color:#032d60 !important;font-size:1.4rem; mso-line-height-rule:exactly; line-height:32px; font-weight:600; margin:0;">Olá ${nome}, tudo bem ?</h1>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="bottom" height="240" style="height:240px" class="hauto"><a href="https://www.salesforce.com/br/"  target="_blank"><img src="https://image.mail.salesforce.com/lib/fea31c727564047c74/m/1/a0U7y000003qoJxEAI_sales-with-astro.png" alt="" height="240" style="display:block;border:none;height:240px" class="w80pc hauto"></a></td>
                        </tr>
                      </table>
                      <!--[if gte mso 9]>   
                    </div>
                    </v:fill>
                  </v:rect>
                  <![endif]-->
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top:40px;padding-bottom:18px">
                  <!--CTA-->
                </td>
              </tr>

              <!-- Copy before speakers or stats -->
              <tr>
                <td align="center" style="padding-top:18px">
                  <table role="presentation" align="center" width="496" border="0" cellspacing="0" cellpadding="0" style="width:496px" class="w90pc">
                    <tr>
                      <td align="center" style="font-family:'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif;color:#181818;font-size:16px;line-height:24px;font-weight:normal;">
                      
                        <p style="font-family: 'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif; color:#181818; font-size:1.2rem;mso-line-height-rule: exactly;line-height:1.6rem;margin: 0 0 16px 0;text-align: center; font-weight: bold">
Este é um email de confirmação de teste grátis, recebemos a sua solicitação e um responsável vai entrar em contato em breve.</p>

                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top:16px">
                 <!-- Update width 496/600 narrow/wide -->
                 <table role="presentation" align="center" width="496" border="0" cellspacing="0" cellpadding="0" style="width:496px" class="w90pc">
                 </table>
                </td>
              </tr>
              
              
            </table>
            <!--end Primary offer content-->
          </td>
        </tr>
      </table>
      <!--end DOUGLAS FIR -->      
      <!--Vertical module-->
      <table role="presentation" width="100%" bgcolor="#f4f4f4" border="0" cellspacing="0" cellpadding="0" class="center_iOS">
        <tr>
          <td align="center" valign="top">
            <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" class="w100pc">
              <tr>
                <td align="center" valign="top" style="padding-top:40px;padding-bottom:64px">
                  <!--Vertical compact module-->
                  <table role="presentation" align="center" width="496" border="0" cellspacing="0" cellpadding="0" style="width:496px" class="w90pc">
                    <tr>
                      <td align="center" style="padding-bottom: 24px"><a href="https://www.salesforce.com/br/"  target="_blank"><img src="https://image.mail.salesforce.com/lib/fea31c727564047c74/m/1/a0U7y000003rCanEAE_hood_trailblazer.png" width="248" border="0" alt="" style="display:block;border:none" class="w70pc"></a></td>
                    </tr>
                    <tr>
                      <td align="center" valign="top" style="font-family:'SalesforceSansRegular', Helvetica, Arial, sans-serif;color:#181818;font-size:16px;line-height:24px;font-weight: normal;vertical-align:top" class="block">
                        <h2 style="font-family:'ITC Avant Garde Demi', Helvetica, Arial, sans-serif;color:#032d60;font-size:20px;mso-line-height-rule:exactly;line-height:24px;font-weight:600;letter-spacing:-0.0225em;text-align:center;margin: 0 0 1.2rem 0;"><a href="http://click.mail.salesforce.com/?qs=2b692c3721935ae9cca242f2cb0cd469d591b81490be7999104534c8382d524868b427b5027e0a92ffcb5d8fcd2214abb61dd3d03579e886bccf98f019b9434d"  style="text-decoration: none;color:#032d60;" target="_blank">Conheça nossas ferramentas e aprendizado</a></h2>
                        
                       <p style="font-family: 'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif; color:#181818; font-size:16px;mso-line-height-rule: exactly;line-height:24px;margin: 0 0 16px 0;text-align: center">
A Salesforce oferece uma ampla gama de ferramentas poderosas que podem transformar a maneira como você se relaciona com seus clientes e impulsiona o sucesso do seu negócio.</p>

<p style="font-family: 'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif; color:#181818; font-size:16px;mso-line-height-rule: exactly;line-height:24px;margin: 0 0 25px 0;text-align: center">
Fique à vontade para acessar nossos materiais de aprendizado e documentação para começar a se familiarizar com nossa plataforma.</p>

<a style="text-decoration: none; color: #fff; background: #032d60; padding: 0.7rem; border-radius: 0.3rem;" href='https://trailhead.salesforce.com/pt-BR'>Explorar o Trailhead</a>

                       
                        <!--CTA-->
                        <table role="presentation" border="0" cellspacing="0" cellpadding="0" class="w100pc">
                          <tr>
                            <td align="center" style="padding-top:14px">
                              <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tr>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--end CTA-->
                      </td>
                    </tr>
                  </table>
                  <!--end Vertical compact module-->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!--end Vertical module-->

              
        
        
        <!-- Footer -->
        <table role="presentation" width="100%" bgcolor="#032d60" border="0" cellspacing="0" cellpadding="0" style="border-top:2px solid #032d60" class="center_iOS">
          <tr>
            <td align="center" valign="top">
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="width:648px" class="w100pc">
                <tr>
                  <td align="center" valign="top" style="padding-top:30px; padding-bottom:40px">
                    <table role="presentation" width="496" border="0" align="center" cellpadding="0" cellspacing="0" style="width:496px" class="w90pc">
                      <tr>
                        <td align="left" valign="top" style="font-family:'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif; color:#fffffe;font-size: 11px; line-height:13px">
                          
                         <!--Copyright-->
                         <p style="font-family:'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif; color:#fffffe;font-size:11px;mso-line-height-rule:exactly;line-height:16px;font-weight: normal;margin:0;">&copy; 2024 Salesforce, Inc. </p>
                         <!--Address-->
                          <p style="font-family:'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif; color:#fffffe;font-size:11px;mso-line-height-rule:exactly;line-height:16px;font-weight: normal;margin:0;">
                           Salesforce Technologia Ltda. <span class="mobileLinks">Av. Jornalista Roberto Marinho, 85, 14º Andar - Cidade Monções, CEP 04576-010, São Paulo - SP</span><br>
                         <!--Contact info-->
                          
                            Número gratuito para o Brasil: 0800 891 1887
                          </p>
                         <i style="letter-spacing:20px;mso-font-width:-100%;display:inline-block;width:50px;font-size:0px;mso-text-raise:16px;height:16px;">&#8202;</i>
                         <!--Social links-->
                         
                         <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="w100pc">
                            <tr>
                              <td align="center">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="w100pc">
                                  <tr>
                                    <td align="center" valign="middle" style="padding-right:20px" class="pr0"><a href="http://click.mail.salesforce.com/?qs=84c067a83ce95bec7dcfed166721568b2c84512c59f32df24a7c726c63feb5afebf75ed0ab720a43792a2020107654f1d30d37a5a1cd54598821316c595c1a94"  target="_blank"><img src="https://image.mail.salesforce.com/lib/fe981c727564047b72/m/1/icon_FB_ff.png" style="display:block; font-family:Helvetica, Arial, sans-serif; font-size:10px; color:#fffffe; text-decoration: none;" alt="Facebook" border="0" width="30" height="30"></a></td>
                                    <td align="center" valign="middle" style="padding-right:20px" class="pr0"><a href="http://click.mail.salesforce.com/?qs=f5981dd8b68c66bb6a44ffe88fba309032f7b9e2c096c1ba5e85463aa65b0bbcd1db3b45ea5fd301371a657de121c3b80dc602f4f67a76440f4410f9fe34bb34"  target="_blank"><img src="https://image.mail.salesforce.com/lib/fe981c727564047b72/m/1/icon_X_ff.png" style="display:block; font-family:Helvetica, Arial, sans-serif; font-size:10px; color:#fffffe; text-decoration: none;" alt="X" border="0" width="30" height="30"></a></td>
                                    <td align="center" valign="middle" style="padding-right:20px" class="pr0"><a href="http://click.mail.salesforce.com/?qs=d4d0651d5ee8dd09def24d11dc311b20caf1a69bb8e4054c10f945a8ca5fa6ab157c94680b51568d4c70ebb599c47c503551aa4f1605eefb6953c82bcc54d17c"  target="_blank"><img src="https://image.mail.salesforce.com/lib/fe981c727564047b72/m/1/icon_IN_ff.png" style="display:block; font-family:Helvetica, Arial, sans-serif; font-size:10px; color:#fffffe; text-decoration: none;" alt="Linkedin" border="0" width="30" height="30"></a></td>
                                    <td align="center" valign="middle" style="padding-right:20px" class="pr0"><a href="http://click.mail.salesforce.com/?qs=dbc7d01d47c2e710481f40205c2a3bab69f278a7ceed9c993193578d651dc5803c016814398789b50a53c6abe55f41c730a69a9691e4b46ad695bb8f01cb68ea"  target="_blank"><img src="https://image.mail.salesforce.com/lib/fe981c727564047b72/m/1/icon_IG_ff.png" style="display:block; font-family:Helvetica, Arial, sans-serif; font-size:10px; color:#fffffe; text-decoration: none;" alt="Instagram" border="0" width="30" height="30"></a></td>
                                    <td align="center" valign="middle"><a href="http://click.mail.salesforce.com/?qs=e4377615fb7cb7fa588036698bb525ad78b435e65261d29c4fff777f721ef16d29872e2065fc85b5ce1cf31bf733e77f388c5bd8e0b3585cea6d9825dc482efa"  target="_blank"><img src="https://image.mail.salesforce.com/lib/fe981c727564047b72/m/1/icon_YT_ff.png" style="display:block; font-family:Helvetica, Arial, sans-serif; font-size:10px; color:#fffffe; text-decoration: none;" alt="YouTube" border="0" width="30" height="30"></a></td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                         <i style="letter-spacing:20px;mso-font-width:-100%;display:inline-block;width:50px;font-size:0px;mso-text-raise:16px;height:16px;">&#8202;</i>
                            
                         
                         <!--end Social links-->
                         <!--Email sent to:-->
                          <p style="font-family:'SalesforceSansRegular', Salesforce Sans, Helvetica, Arial, sans-serif; font-size:11px;line-height:16px;color:#fffffe;font-weight:normal; margin:0; font-style:italic">Este e-mail foi enviado para <span class="mobileLinks">${email}</span></p>
                         <!--Unsub and privacy-->

                         
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <!-- end Footer -->
      </div>
      <div class="gmailfix" style="white-space:nowrap; font:15px courier; line-height:0;">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>

<img src="http://click.mail.salesforce.com/open.aspx?ffcb10-fe9717777465077475-fe3216717367017e701771-fe9c1c727564047a77-ffcd16-fe3416767264077c741576-ff331070756c&d=80118&bmt=0" width="1" height="1" alt="">
  

      
      <style data-ignore-inlining>@media (prefers-color-scheme: dark) { #_t::before {content:url('https://f5pi3anf.emltrk.com/v2/f5pi3anf?rd&d=267031116');}} @media (prefers-color-scheme: light) { #_t::before {content:url('https://f5pi3anf.emltrk.com/v2/f5pi3anf?rl&d=267031116');}} @media print{ #_t {background-image:url('https://f5pi3anf.emltrk.com/v2/f5pi3anf?p&d=267031116');}} div.OutlookMessageHeader {background-image:url('https://f5pi3anf.emltrk.com/v2/f5pi3anf?f&d=267031116')} table.moz-email-headers-table {background-image:url('https://f5pi3anf.emltrk.com/v2/f5pi3anf?f&d=267031116')} blockquote #_t {background-image:url('https://f5pi3anf.emltrk.com/v2/f5pi3anf?f&d=267031116')} #MailContainerBody #_t {background-image:url('https://f5pi3anf.emltrk.com/v2/f5pi3anf?f&d=267031116')}</style><div id="_t"></div>

      <img src="https://f5pi3anf.emltrk.com/v2/f5pi3anf?d=267031116" width="1" height="1" border="0" alt="" />
      
  </body>
</html>
`
  return {
    from: '"Confirmação de solicitação: Seu teste grátis está sendo preparado" <challengesalesforcefiap@gmail.com>', // sender address
    to: email, // este email virá do body da requisição
    subject: `Bem vindo(a) ${nome}`, // Subject line
    text: "Estamos felizes com você aqui", // plain text body
    html: message, // html body
  };
};
