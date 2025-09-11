{ revA ? "e50c883d982e8f6d4333880e900f6ed19215e8ea", pkgs ? import
  (fetchTarball "https://github.com/NixOS/nixpkgs/archive/${revA}.tar.gz") { }
}:
with pkgs;
mkShell {
  packages = [
    csharp-ls
    dotnet-sdk_9
    nodejs
    mongosh
    neovim
    git
    python3
    cargo
    ripgrep
    lazygit
    fd
    ast-grep
    unzip
    nixfmt-classic
    fzf
  ];

shellHook = ''
    LAZYVIM_CONFIG_DIR="$HOME/.config/nvim-lazy"

    if [ ! -d "$LAZYVIM_CONFIG_DIR" ]; then
      git clone https://github.com/LazyVim/starter "$LAZYVIM_CONFIG_DIR"
      rm -rf ~/.config/nvim-lazy/.git
      cp etc/csharp_ls.lua  ~/.config/nvim-lazy/lua/plugins/
    fi
  '';

  env = {
    NVIM_APPNAME = "nvim-lazy";
    EDITOR = "nvim";
  };
}
