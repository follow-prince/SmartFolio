#!/bin/bash

clear_terminal() {
  clear
  echo "Terminal screen cleared."
}

# Function to kill processes by name
kill_process() {
  local process_name=$1
  # Find all PIDs of the given process name and kill them
  pids=$(pgrep -f "$process_name")
  if [ -n "$pids" ]; then
    echo "Killing $process_name processes: $pids"
    kill $pids 2>/dev/null
    echo "$process_name processes killed."
  else
    echo "No $process_name processes found."
  fi
}

# Main script logic
run_script() {
  clear_terminal

  # Record the start time
  start_time=$(date +"%Y-%m-%d %H:%M:%S")
  echo "Script started at: $start_time"

  # Measure the real-time duration
  SECONDS=0

  # Kill pnpm and next processes
  kill_process "pnpm"
  kill_process "next"

  # Start pnpm dev
  echo "Starting pnpm dev..."
  pnpm dev

  # Record the end time
  end_time=$(date +"%Y-%m-%d %H:%M:%S")
  echo "Script ended at: $end_time"

  # Calculate and display the real-time duration
  duration=$SECONDS
  echo "Script execution time: $(($duration / 60)) minutes and $(($duration % 60)) seconds."
}

# Loop for restart action
while true; do
  run_script

  read -p "Do you want to restart the process? (y/n): " choice
  case "$choice" in
    y|Y ) echo "Restarting...";;
    n|N ) echo "Exiting..."; exit 0;;
    * ) echo "Invalid input. Exiting..."; exit 1;;
  esac
done
