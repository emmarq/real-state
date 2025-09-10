{ revA ? "1d85984351e0c8952506a65cb276989c7248d120", pkgs ? import
  (fetchTarball "https://github.com/NixOS/nixpkgs/archive/${revA}.tar.gz") { }
}:
with pkgs;
mkShellNoCC {
  packages = [
    dotnetCorePackages.dotnet_9.sdk
    neovim
    ripgrep
    fd
    lazygit
    ast-grep
    cargo
    unzip
    nixfmt-classic
    fzf
    python3
  ];
}
