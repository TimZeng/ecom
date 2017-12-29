function localtunnel {
  lt -p 5000 -s zengtiantiankdfjadsflkj
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done