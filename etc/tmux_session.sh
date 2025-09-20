#!/usr/bin/env bash
SESSION_NAME="my-session"
WINDOW_NAME="main"

if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
  echo "Session '$SESSION_NAME' already exists. Attaching to it."
  tmux attach-session -t "$SESSION_NAME"
  exit 0
fi

# Create a new detached session
tmux new-session -d -s "$SESSION_NAME" -n "$WINDOW_NAME"

# Split the window vertically to create 74% top, 26% bottom
tmux split-window -v -p 26

# Select the bottom pane (pane 1) and split it horizontally into two equal parts (13% each)
tmux select-pane -t 1
tmux split-window -v -p 50

# Now we have:
# Pane 0: Top (74%)
# Pane 1: Bottom-left (13%)
# Pane 2: Bottom-right (13%)

# Send your command to the first pane (pane 0)
tmux send-keys -t "$SESSION_NAME:$WINDOW_NAME.0" "nvim ." C-m
tmux send-keys -t "$SESSION_NAME:$WINDOW_NAME.1" "nu" C-m
tmux send-keys -t "$SESSION_NAME:$WINDOW_NAME.2" "nu" C-m

# Select the first pane to focus on it
tmux select-pane -t 0

tmux set -g mouse on

# Attach to the session
tmux attach-session -t "$SESSION_NAME"
