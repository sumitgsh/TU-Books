# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process to TU-Books. We are happy to welcome all the contributors who are willing to enhance/add documentation and features to this project. Feel free to contribute and remember, no contribution is too small.

## Submitting Contributions :

### Step 1 : Find an issue

- Kindly have a look at the existing issues or [create your own issues!](#creating-an-issue)
- Kindly wait for the issue to be assigned to you. Once assigned you can get started with working on the same.
- Note : Every change in this project should/must have an associated issue.

### Step 2: Fork the repository

- Fork this Repository. This will create a local copy of this repository on your GitHub Profile.

### Step 3: Clone the repository:

- Clone this Github repository. Open up the terminal and type in:

```git
$ git clone https://github.com/YOUR_USERNAME/TU-Books.git
```

Don't forget to write your GitHub user name in place of _YOUR_USERNAME_

- Keep a reference to the original project in upstream remote.

```git
$ cd TU-Books
$ git remote add upstream https://github.com/sumitgsh/TU-Books
```

- Update your copy before working.

```git
$ git remote update
$ git checkout <branch-name>
$ git rebase upstream/<branch-name>
```

### Step 4: Create a development branch

- `cd` into the parent directory. Now create a branch of the master by pushing the command

```git
$ git branch ISSUE_NUMBER
```

You can now check the branches by pushing in the command: `git branch`. You will see the `main` branch and another branch with your issue number.

- Switch to the Development branch. Never develop on the `main` branch. Push in the command:

```git
$ git checkout ISSUE_NUMBER
```

Voila! You've completed the initial setup :smiley:

Start Coding 👩‍💻👨‍💻

### Step 5: Commit your changes

- Stage the files that you want to include in your commit. To stage a specific changed file, type in:

  ```git
  $ git add <FILE_NAME>
  ```

  To stage all the changed files, type in:

  ```git
  $ git add --all  or  $ git add .
  ```

  This command snapshots the file in preparation for versioning and further adds it to the staging area.

- Once you've staged the files that you want to include in your commit, you're ready. Make appropriate commits with proper commit messages. Commit messages should be short and descriptive of your change. If you are looking through your repository's history, you'll be guided by the commit messages, so they should tell a story.  
   Make a commit by pushing the command:
  
  ```git
  $ git commit -m "Your Message"
  ```

### Step 6: Push your changes

- Upload all local branch commits to the remote repository.
  
  ```git
  $ git push origin <branch_name>
  ```

### Step 7: Creating a Pull Request

- Go to your repository in browser and click on compare.

- Open a pull request by clicking the Create pull request button.

- Then add a title and description to your pull request that explains your contribution. Click on _Create Pull Request_ button.

Voila! Your Pull Request has been submitted and will be merged

## Creating an issue

Issues can be used to keep track of bugs, enhancements, or other requests.

- On GitHub, navigate to the main page of the repository.
- Under your repository name, click on the Issues button.

- Click New issue.

- If there are multiple issue types, click Get started next to the type of issue you'd like to open.

- Type a title and description for your issue.
- After creating the issue please wait until the project maintainer assigns the issue to you.
