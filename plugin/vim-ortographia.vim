if exists('g:vim_ortographia_loaded')
    finish
end

let g:vim_ortographia_loaded = 1

function Ortographia()
    imap we ě
    imap ss š
    imap cc č
    imap rr ř
    imap zz ž
    imap yy ý
    imap aa á
    imap ii í
    imap ee é
    imap oo ó
    imap tt ť
    imap uu ú
    imap ui ů
    imap dd ď
    imap nn ň
    imap WE Ě
    imap SS Š
    imap CC Č
    imap RR Ř
    imap ZZ Ž
    imap YY Ý
    imap AA Á
    imap II Í
    imap EE É
    imap OO Ó
    imap TT Ť
    imap UU Ú
    imap UI Ů
    imap DD Ď
    imap NN Ň
    imap We Ě
    imap Ss Š
    imap Cc Č
    imap Rr Ř
    imap Zz Ž
    imap Yy Ý
    imap Aa Á
    imap Ii Í
    imap Ee É
    imap Oo Ó
    imap Tt Ť
    imap Uu Ú
    imap Ui Ů
    imap Dd Ď
    imap Nn Ň
endfunction

command Ortographia call Ortographia()
