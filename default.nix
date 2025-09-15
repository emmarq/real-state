{ revA ? "e50c883d982e8f6d4333880e900f6ed19215e8ea", pkgs ? import
  (fetchTarball "https://github.com/NixOS/nixpkgs/archive/${revA}.tar.gz") { }
}:
with pkgs;
mkShell {
  packages = [
    csharp-ls
    netcoredbg
    dotnet-sdk_9
    nodejs
    openapi-generator-cli
    mongosh
    tmux
    nushell
    neovim
    git
    lazygit
    curl
    fzf 
    ripgrep 
    fd 
    python3
    cargo
    ast-grep
    unzip
    nixfmt-classic
  ];

shellHook = ''
    LAZYVIM_CONFIG_DIR="$HOME/.config/nvim-lazy"

    if [ ! -d "$LAZYVIM_CONFIG_DIR" ]; then
      git clone https://github.com/LazyVim/starter "$LAZYVIM_CONFIG_DIR"
      rm -rf ~/.config/nvim-lazy/.git
      cp etc/plugins.lua  ~/.config/nvim-lazy/lua/plugins/
    fi

    chmod 755 etc/create_docker_mongo.sh
    chmod 755 etc/tmux_session.sh
    etc/tmux_session.sh
  '';

  env = {
    NVIM_APPNAME = "nvim-lazy";
    EDITOR = "nvim";
  };
}
