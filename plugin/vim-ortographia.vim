if exists('g:vim_ortographia_loaded')
    finish
end

let g:vim_ortographia_loaded = 1

function Ortographia()
    imap jje ě
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
    imap uo ů
    imap dd ď
    imap nn ň
endfunction

command Ortographia call Ortographia()
