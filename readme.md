https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json

…or create a new repository on the command line
echo "# paginationjsdom" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/govindbisen/paginationjsdom.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/govindbisen/paginationjsdom.git
git branch -M main
git push -u origin main

// what i do...
git add .
git commit -m "message of commit"
git push origin main

- my design
  TODO : first [previous] 5 6 7 8 [next] last

- first = 0
- last = total no of record / no of person per page
- next = id + 1
- previous = id + 1

  upgrade as a pro
