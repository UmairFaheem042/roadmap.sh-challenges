##############################################################################
# AUTHOR: Umair
# DATE: 26-01-2026
# This script displays system stats like CPU usage, Memory usage, Disk Usage, 
# Processes by CPU and Memory usage
# ############################################################################

echo "Total CPU Usage: $(top -bn1 | grep "%Cpu(s)" | awk '{print 100 - $8 "%"}')"
echo ""

echo "Total memory usage (Free vs Used including percentage)"
echo "$(free -m | grep Mem | awk '{ printf "Total: %sMB\nUsed: %sMB\t Used%: %.2f%\nFree: %sMB\t Free%: %.2f%\n", $2, $3, $3/$2*100, $4, $4/$2*100}')"
echo ""

echo "Total disk usage (Free vs Used including percentage)"
echo "$(df -h | grep "rootfs" | awk '{printf "Total Disk: %s\nUsed Disk: %s\t Used%: %.2f%\nFree Disk: %s\t Free%: %.2f%\n", $2, $3, $3/$2*100, $4, $4/$2*100}')"
echo ""

echo "Top 5 processes by CPU usage"
echo "$(ps -eo pid,comm,%cpu --sort=-%cpu | head -n 6)"
echo ""

echo "Top 5 processes by memory usage"
echo "$(ps -eo pid,comm,%mem --sort=-%mem | head -n 6)"
echo ""
