echo == Rebuild Auth =================================================
npm install
echo 
if [ "$1" != "silent" ]
then
    read -p "Press any key to continue... " -n1 -s
fi