'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module5_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.11</div>
        <div className="lesson-title-main">
          <h1>Working with Files and Exploring the Linux Directory Structure</h1>
        </div>
      </div>

      <section className="content-section">
        <h2>Welcome Back, Linux Explorers!</h2>
        <p>In Linux, everything is a file from text documents to hardware devices.</p>
        <p>But Linux is not just about files… it's also about users, permissions, shell scripting, and system administration.</p>
        <p>This upgraded lesson will take you from basic file operations to advanced Linux concepts needed for real-world DevOps, cybersecurity, and system admin tasks.</p>
      </section>

      <section className="content-section">
        <h3>The Linux Directory Structure</h3>
        <p>Linux follows a tree-like hierarchy, rooted at /.</p>
        <p>Here's a deeper look into essential directories:</p>

        <table className="w-full border-collapse border-2 border-gray-400 my-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Directory</th>
              <th className="border-2 border-gray-400 p-3">Purpose</th>
              <th className="border-2 border-gray-400 p-3">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/</td><td className="border-2 border-gray-400 p-3">Root (top of the filesystem).</td><td className="border-2 border-gray-400 p-3">Contains everything</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/home</td><td className="border-2 border-gray-400 p-3">User home directories.</td><td className="border-2 border-gray-400 p-3 font-mono">/home/student</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/etc</td><td className="border-2 border-gray-400 p-3">System configuration files.</td><td className="border-2 border-gray-400 p-3 font-mono">/etc/passwd</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/bin</td><td className="border-2 border-gray-400 p-3">Basic system binaries.</td><td className="border-2 border-gray-400 p-3 font-mono">/bin/grep</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/sbin</td><td className="border-2 border-gray-400 p-3">System binaries (admin tasks).</td><td className="border-2 border-gray-400 p-3 font-mono">/sbin/reboot</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/usr</td><td className="border-2 border-gray-400 p-3">User programs/software.</td><td className="border-2 border-gray-400 p-3 font-mono">/usr/bin/python</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/var</td><td className="border-2 border-gray-400 p-3">Changing data like logs.</td><td className="border-2 border-gray-400 p-3 font-mono">/var/log/auth.log</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/opt</td><td className="border-2 border-gray-400 p-3">Optional/third-party software.</td><td className="border-2 border-gray-400 p-3 font-mono">/opt/node/</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/dev</td><td className="border-2 border-gray-400 p-3">Device files.</td><td className="border-2 border-gray-400 p-3 font-mono">/dev/sda1</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/proc</td><td className="border-2 border-gray-400 p-3">Kernel &amp; process information.</td><td className="border-2 border-gray-400 p-3 font-mono">/proc/cpuinfo</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/tmp</td><td className="border-2 border-gray-400 p-3">Temporary files.</td><td className="border-2 border-gray-400 p-3 font-mono">/tmp/cache</td></tr>
          </tbody>
        </table>

        <p><strong>Try this:</strong></p>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          ls -l /
        </div>
      </section>

      <section className="content-section">
        <h3>Working with Files</h3>
        <table className="w-full border-collapse border-2 border-gray-400 my-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Command</th>
              <th className="border-2 border-gray-400 p-3">Meaning</th>
              <th className="border-2 border-gray-400 p-3">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">touch file.txt</td><td className="border-2 border-gray-400 p-3">Create file</td><td className="border-2 border-gray-400 p-3 font-mono">touch notes.txt</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">cat file.txt</td><td className="border-2 border-gray-400 p-3">View file</td><td className="border-2 border-gray-400 p-3 font-mono">cat notes.txt</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">nano file.txt</td><td className="border-2 border-gray-400 p-3">Edit file</td><td className="border-2 border-gray-400 p-3 font-mono">nano notes.txt</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">rm file.txt</td><td className="border-2 border-gray-400 p-3">Delete file</td><td className="border-2 border-gray-400 p-3 font-mono">rm temp.txt</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">cp a b</td><td className="border-2 border-gray-400 p-3">Copy file</td><td className="border-2 border-gray-400 p-3 font-mono">cp a.txt b.txt</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">mv a b</td><td className="border-2 border-gray-400 p-3">Move / Rename file</td><td className="border-2 border-gray-400 p-3 font-mono">mv old new</td></tr>
          </tbody>
        </table>
        <div className="border-4 border-red-500 bg-red-50 p-3 rounded-lg">
          <p className="text-red-800"><strong>Warning:</strong> <span className="font-mono">rm -rf /</span> will destroy the system. Never run it.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Directory Navigation Commands</h3>
        <table className="w-full border-collapse border-2 border-gray-400 my-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Task</th>
              <th className="border-2 border-gray-400 p-3">Command</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border-2 border-gray-400 p-3">show current location</td><td className="border-2 border-gray-400 p-3 font-mono">pwd</td></tr>
            <tr><td className="border-2 border-gray-400 p-3">list files</td><td className="border-2 border-gray-400 p-3 font-mono">ls -l</td></tr>
            <tr><td className="border-2 border-gray-400 p-3">move to folder</td><td className="border-2 border-gray-400 p-3 font-mono">cd folder</td></tr>
            <tr><td className="border-2 border-gray-400 p-3">go back</td><td className="border-2 border-gray-400 p-3 font-mono">cd ..</td></tr>
            <tr><td className="border-2 border-gray-400 p-3">jump to home</td><td className="border-2 border-gray-400 p-3 font-mono">cd ~</td></tr>
            <tr><td className="border-2 border-gray-400 p-3">search for file</td><td className="border-2 border-gray-400 p-3 font-mono">find /home -name file.txt</td></tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h3>User &amp; Group Management</h3>
        <p>Linux is a multi-user OS, so managing users and groups is critical.</p>

        <h4 className="font-semibold mt-4">Creating a new user</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">sudo adduser alice</div>
        <p>Alice enters the system. Her account &amp; home folder are created.</p>

        <h4 className="font-semibold mt-4">Deleting a user</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">sudo deluser bob</div>
        <p>Bob is removed from the system user list.</p>

        <h4 className="font-semibold mt-4">Adding a user to sudo group</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">sudo usermod -aG sudo alice</div>
        <p>Alice now has admin (sudo) privileges.</p>

        <h4 className="font-semibold mt-4">Create a new group</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">sudo groupadd devteam</div>
        <p>A new team group devteam is created.</p>

        <h4 className="font-semibold mt-4">Add user to group</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">sudo usermod -aG devteam alice</div>
        <p>Alice joins the devteam group.</p>

        <h4 className="font-semibold mt-4">Remove user from group</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">sudo gpasswd -d alice devteam</div>
        <p>Alice is removed from the devteam group.</p>
      </section>

      <section className="content-section">
        <h3>File Ownership &amp; Permissions</h3>

        <h4 className="font-semibold mt-4">Viewing permissions</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">ls -l</div>
        <p>Shows the file owner, group and rwx permissions.</p>

        <h4 className="font-semibold mt-4">Change file ownership</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          sudo chown alice file.txt<br />
          sudo chown alice:devteam script.sh
        </div>
        <p>Assigns new owner or owner + group.</p>

        <h4 className="font-semibold mt-4">Change file permissions</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          chmod 755 script.sh<br />
          chmod u+x run.sh<br />
          chmod g-w file.txt<br />
          chmod o-rwx secrets.txt
        </div>
        <p>Modify read, write and execute permissions.</p>

        <h4 className="font-semibold mt-4">Permission Values</h4>
        <table className="w-full border-collapse border-2 border-gray-400 my-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Value</th>
              <th className="border-2 border-gray-400 p-3">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">7</td><td className="border-2 border-gray-400 p-3 font-mono">rwx</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">6</td><td className="border-2 border-gray-400 p-3 font-mono">rw-</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">5</td><td className="border-2 border-gray-400 p-3 font-mono">r-x</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">4</td><td className="border-2 border-gray-400 p-3 font-mono">r--</td></tr>
          </tbody>
        </table>

        <h4 className="font-semibold mt-4">Example: Securing a confidential file</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          touch secret.txt<br />
          sudo chown root:root secret.txt<br />
          chmod 600 secret.txt
        </div>
        <p>Only root can read &amp; write this file — safe and locked!</p>
      </section>

      <section className="content-section">
        <h3>Shell Scripting Basics</h3>

        <h4 className="font-semibold mt-4">Create a script</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">nano backup.sh</div>

        <h4 className="font-semibold mt-4">Script content</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          #!/bin/bash<br />
          echo "Starting backup..."<br />
          cp -r ~/Documents ~/Backup<br />
          echo "Backup completed!"
        </div>

        <h4 className="font-semibold mt-4">Run the script</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          chmod +x backup.sh<br />
          ./backup.sh
        </div>
      </section>

      <section className="content-section">
        <h3>Using Variables &amp; Conditions</h3>
        <p>Before moving into automation, students must understand how a shell script stores information and makes decisions.</p>
        <p>Think of a variable as a labeled container where we store a value. And a condition is like asking a question: "If this is true, do A. Otherwise, do B."</p>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          #!/bin/bash<br /><br />
          name="Linux User"<br /><br />
          if [ $name == "Linux User" ]; then<br />
          &nbsp;&nbsp;echo "Welcome back!"<br />
          else<br />
          &nbsp;&nbsp;echo "Unknown user"<br />
          fi
        </div>

        <p className="mt-3"><strong>Explanation:</strong></p>
        <ul className="list-disc pl-6">
          <li>name="Linux User" → Creates a variable</li>
          <li>if [...] → Checks if the variable matches</li>
          <li>echo → Prints the result to the terminal</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Understanding Loops</h3>
        <p>A loop is used when you want Linux to repeat an action— especially useful for checking files, scanning folders, or running commands multiple times.</p>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          #!/bin/bash<br /><br />
          for file in *.txt<br />
          do<br />
          &nbsp;&nbsp;echo "Found: $file"<br />
          done
        </div>

        <p className="mt-3"><strong>What's happening?</strong></p>
        <ul className="list-disc pl-6">
          <li>for file in *.txt → Picks each text file one by one</li>
          <li>echo "Found: $file" → Prints the name of that file</li>
          <li>done → Ends the loop</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Network Commands (Admin Level)</h3>
        <table className="w-full border-collapse border-2 border-gray-400 my-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Command</th>
              <th className="border-2 border-gray-400 p-3">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">ifconfig / ip a</td><td className="border-2 border-gray-400 p-3">Show IP address &amp; network interface details</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">ping google.com</td><td className="border-2 border-gray-400 p-3">Check network / internet connectivity</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">netstat -tulpn</td><td className="border-2 border-gray-400 p-3">List active ports &amp; services (older tool)</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">ss -lntp</td><td className="border-2 border-gray-400 p-3">Modern, faster port-scanning tool</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">curl</td><td className="border-2 border-gray-400 p-3">Fetch data from URLs (APIs, webpages)</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">scp</td><td className="border-2 border-gray-400 p-3">Secure file transfer between computers</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">wget</td><td className="border-2 border-gray-400 p-3">Download files from the internet</td></tr>
          </tbody>
        </table>

        <p><strong>Example:</strong></p>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">ping -c 4 google.com</div>
      </section>

      <section className="content-section">
        <h3>Viewing Logs (Critical for Admins)</h3>
        <table className="w-full border-collapse border-2 border-gray-400 my-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Log File</th>
              <th className="border-2 border-gray-400 p-3">Contains</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/var/log/syslog</td><td className="border-2 border-gray-400 p-3">General system-wide events</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/var/log/auth.log</td><td className="border-2 border-gray-400 p-3">Logins, authentication attempts, sudo usage</td></tr>
            <tr><td className="border-2 border-gray-400 p-3 font-mono">/var/log/kern.log</td><td className="border-2 border-gray-400 p-3">Kernel-level activity &amp; warnings</td></tr>
          </tbody>
        </table>

        <h4 className="font-semibold mt-4">Real-time Log Monitoring</h4>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">tail -f /var/log/syslog</div>
        <p>tail -f keeps the terminal open and updates as new log entries appear.</p>
      </section>

      <section className="content-section">
        <h3>📂 Example File Navigation Walkthrough</h3>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-2">
          pwd<br />
          cd ~/Documents<br />
          mkdir ProjectX<br />
          cd ProjectX<br />
          touch README.md<br />
          nano README.md<br />
          cat README.md
        </div>
      </section>

      <section className="content-section">
        <h3>Why Learn Advanced Linux Operations?</h3>
        <ul>
          <li><strong>Cloud &amp; DevOps:</strong> Fixing servers and deploying hotfixes via scripts.</li>
          <li><strong>System Administration:</strong> Managing users, groups, and permissions securely.</li>
          <li><strong>Automation:</strong> Turning busywork into reliable background jobs.</li>
          <li><strong>Security:</strong> Hardening systems by understanding permissions and ports.</li>
        </ul>

        <h4>Recommended Video</h4>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/HbgzrKJvDRw" title="Linux File System/Structure Explained!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>

      <section className="content-section">
        <h3>Mind Map</h3>
        <div className="flex justify-center my-4">
          <img
            src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20System%2Fdir_svg.svg"
            alt="Mind Map"
            className="rounded-lg shadow-lg max-w-md"
          />
        </div>
      </section>

      <section className="content-section">
        <h3>Additional Resources</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://www.geeksforgeeks.org/linux-file-hierarchy-structure/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              Linux File Hierarchy Structure
            </a>
          </li>
          <li>
            <a href="https://ubuntu.com/tutorials/command-line-for-beginners" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              Command Line for Beginners
            </a>
          </li>
          <li>
            <a href="https://linuxjourney.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              Linux Journey
            </a>
          </li>
        </ul>

        <div className="mt-8">
          <Quiz
            title="Module 5.11 Quiz: Linux Advanced Operations"
            questions={[
              {
                question: "Which directory contains system configuration files in Linux?",
                options: ["/bin", "/etc", "/home", "/var"],
                correctAnswer: 1,
                explanation: "/etc is the standard directory for system-wide configuration files."
              },
              {
                question: "In the command 'chmod 755 script.sh', what does the '7' represent?",
                options: ["Read and Write for everyone", "Full permissions (rwx) for the owner", "Read only for the group", "No permissions"],
                correctAnswer: 1,
                explanation: "The first digit '7' (4+2+1) gives read, write, and execute permissions to the file owner."
              },
              {
                question: "Which command is used to change the owner of a file?",
                options: ["chmod", "chown", "adduser", "usermod"],
                correctAnswer: 1,
                explanation: "chown stands for 'Change Owner' and is used to reassign file ownership."
              },
              {
                question: "What is the purpose of a 'Shebang' (#!/bin/bash) at the top of a script?",
                options: ["It's a title for the script", "It tells the system which interpreter to use to run the script", "It makes the script run faster", "It clears the terminal before running"],
                correctAnswer: 1,
                explanation: "The shebang tells the OS to use the Bash shell to interpret the commands in the file."
              },
              {
                question: "Which log file would you check to investigate failed login attempts?",
                options: ["/var/log/syslog", "/var/log/auth.log", "/var/log/kern.log", "/var/log/messages"],
                correctAnswer: 1,
                explanation: "/var/log/auth.log records authentication events, including logins and sudo usage."
              }
            ]}
            subject="OS"
            unitId={5}
            moduleId={11}
          />
        </div>
      </section>
    </div>
  );
};

export default Module5_11;
