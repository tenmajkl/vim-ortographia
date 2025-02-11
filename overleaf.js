// ==UserScript==
// @name         Overleaf Vim Ortographia
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Introduces pre-jan-hus inspired syntax of writing diacritics in czech language into overleaf
// @author       tenmajkl
// @match        https://www.overleaf.com/project/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=overleaf.com
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    window.addEventListener("UNSTABLE_editor:extensions", (event) => {
    const { CodeMirror, CodeMirrorVim, extensions } = event.detail;

    CodeMirrorVim.Vim.map("we", "ě", "insert");
    CodeMirrorVim.Vim.map("ss", "š", "insert");
    CodeMirrorVim.Vim.map("cc", "č", "insert");
    CodeMirrorVim.Vim.map("rr", "ř", "insert");
    CodeMirrorVim.Vim.map("zz", "ž", "insert");
    CodeMirrorVim.Vim.map("yy", "ý", "insert");
    CodeMirrorVim.Vim.map("aa", "á", "insert");
    CodeMirrorVim.Vim.map("ii", "í", "insert");
    CodeMirrorVim.Vim.map("ee", "é", "insert");
    CodeMirrorVim.Vim.map("oo", "ó", "insert");
    CodeMirrorVim.Vim.map("tt", "ť", "insert");
    CodeMirrorVim.Vim.map("uu", "ú", "insert");
    CodeMirrorVim.Vim.map("ui", "ů", "insert");
    CodeMirrorVim.Vim.map("dd", "ď", "insert");
    CodeMirrorVim.Vim.map("nn", "ň", "insert");
    CodeMirrorVim.Vim.map("WE", "Ě", "insert");
    CodeMirrorVim.Vim.map("SS", "Š", "insert");
    CodeMirrorVim.Vim.map("CC", "Č", "insert");
    CodeMirrorVim.Vim.map("RR", "Ř", "insert");
    CodeMirrorVim.Vim.map("ZZ", "Ž", "insert");
    CodeMirrorVim.Vim.map("YY", "Ý", "insert");
    CodeMirrorVim.Vim.map("AA", "Á", "insert");
    CodeMirrorVim.Vim.map("II", "Í", "insert");
    CodeMirrorVim.Vim.map("EE", "É", "insert");
    CodeMirrorVim.Vim.map("OO", "Ó", "insert");
    CodeMirrorVim.Vim.map("TT", "Ť", "insert");
    CodeMirrorVim.Vim.map("UU", "Ú", "insert");
    CodeMirrorVim.Vim.map("UI", "Ů", "insert");
    CodeMirrorVim.Vim.map("DD", "Ď", "insert");
    CodeMirrorVim.Vim.map("NN", "Ň", "insert");
    CodeMirrorVim.Vim.map("We", "Ě", "insert");
    CodeMirrorVim.Vim.map("Ss", "Š", "insert");
    CodeMirrorVim.Vim.map("Cc", "Č", "insert");
    CodeMirrorVim.Vim.map("Rr", "Ř", "insert");
    CodeMirrorVim.Vim.map("Zz", "Ž", "insert");
    CodeMirrorVim.Vim.map("Yy", "Ý", "insert");
    CodeMirrorVim.Vim.map("Aa", "Á", "insert");
    CodeMirrorVim.Vim.map("Ii", "Í", "insert");
    CodeMirrorVim.Vim.map("Ee", "É", "insert");
    CodeMirrorVim.Vim.map("Oo", "Ó", "insert");
    CodeMirrorVim.Vim.map("Tt", "Ť", "insert");
    CodeMirrorVim.Vim.map("Uu", "Ú", "insert");
    CodeMirrorVim.Vim.map("Ui", "Ů", "insert");
    CodeMirrorVim.Vim.map("Dd", "Ď", "insert");
    CodeMirrorVim.Vim.map("Nn", "Ň", "insert");

    });
})();
