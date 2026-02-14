import React, { useState, useEffect } from 'react';
import Quiz from '../../components/Quiz';

const FileSystemAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const levels = ['File System', 'Directories', 'Files'];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 3), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-4 md:p-8 rounded-2xl shadow-inner my-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className={`w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl font-black text-white shadow-lg transition-all duration-500 ${active === 0 ? 'bg-blue-600 scale-110 ring-4 ring-blue-200' : 'bg-blue-300 opacity-50'
            }`}>
            <span className="text-center px-4 uppercase tracking-tighter">File System</span>
          </div>
          <span className={`text-[10px] font-bold uppercase transition-opacity ${active === 0 ? 'opacity-100 text-blue-600' : 'opacity-0'}`}>Root Container</span>
        </div>

        <div className={`hidden md:block text-2xl font-black text-blue-200 animate-pulse ${active === 1 ? 'scale-125 text-green-400' : ''}`}>→</div>

        <div className="flex flex-col items-center gap-2">
          <div className={`w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl font-black text-white shadow-lg transition-all duration-500 ${active === 1 ? 'bg-emerald-600 scale-110 ring-4 ring-emerald-200' : 'bg-emerald-300 opacity-50'
            }`}>
            <span className="text-center px-4 uppercase tracking-tighter">Directory</span>
          </div>
          <span className={`text-[10px] font-bold uppercase transition-opacity ${active === 1 ? 'opacity-100 text-emerald-600' : 'opacity-0'}`}>Folder Group</span>
        </div>

        <div className={`hidden md:block text-2xl font-black text-blue-200 animate-pulse ${active === 2 ? 'scale-125 text-purple-400' : ''}`}>→</div>

        <div className="flex flex-col items-center gap-2">
          <div className={`w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl font-black text-white shadow-lg transition-all duration-500 ${active === 2 ? 'bg-purple-600 scale-110 ring-4 ring-purple-200' : 'bg-purple-300 opacity-50'
            }`}>
            <span className="text-center px-4 uppercase tracking-tighter">File</span>
          </div>
          <span className={`text-[10px] font-bold uppercase transition-opacity ${active === 2 ? 'opacity-100 text-purple-600' : 'opacity-0'}`}>Data Unit</span>
        </div>
      </div>
      <div className="mt-8 p-3 bg-white rounded-xl border-2 border-blue-100 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Hierarchy View</p>
        <p className="text-xl font-black text-gray-800 transition-all duration-300 transform scale-105">
          {levels[active]}
        </p>
      </div>
    </div>
  );
};

const AccessMethodAnimation: React.FC = () => {
  const [method, setMethod] = useState(0);
  const methods = [
    { name: 'Sequential', blocks: [0, 1, 2, 3, 4], active: 2, color: 'blue' },
    { name: 'Direct', blocks: [0, 1, 2, 3, 4], active: 4, color: 'green' },
    { name: 'Index', blocks: [0, 1, 2, 3, 4], active: 1, color: 'purple' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setMethod(m => (m + 1) % 3), 2500);
    return () => clearInterval(timer);
  }, []);

  const current = methods[method];

  return (
    <div className={`border-4 bg-white p-4 md:p-8 rounded-2xl shadow-xl my-8 transition-colors duration-1000 ${method === 0 ? 'border-blue-500' : method === 1 ? 'border-emerald-500' : 'border-purple-500'
      }`}>
      <div className="text-center mb-8">
        <h4 className={`text-2xl font-black uppercase tracking-tighter transition-colors duration-500 ${method === 0 ? 'text-blue-600' : method === 1 ? 'text-emerald-600' : 'text-purple-600'
          }`}>
          {current.name} Access Method
        </h4>
        <p className="text-xs font-bold text-gray-400 mt-1 italic">Visualizing how the OS finds your data</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {current.blocks.map(b => (
          <div key={b} className="relative">
            <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl font-black text-xl md:text-2xl transition-all duration-500 shadow-md ${b === current.active
                ? `${method === 0 ? 'bg-blue-600' : method === 1 ? 'bg-emerald-600' : 'bg-purple-600'} text-white scale-110 rotate-3 shadow-xl ring-4 ring-offset-2 ring-opacity-50 ${method === 0 ? 'ring-blue-400' : method === 1 ? 'ring-emerald-400' : 'ring-purple-400'}`
                : 'bg-gray-100 text-gray-300'
              }`}>
              {b}
            </div>
            {b === current.active && (
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[8px] font-black px-2 py-1 rounded-full animate-bounce shadow-lg">
                FOUND!
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
        {methods.map((m, idx) => (
          <div key={m.name} className={`p-4 rounded-xl border-2 transition-all duration-300 ${method === idx
              ? `${idx === 0 ? 'bg-blue-50 border-blue-200' : idx === 1 ? 'bg-emerald-50 border-emerald-200' : 'bg-purple-50 border-purple-200'} scale-105 shadow-md`
              : 'bg-white border-gray-100 opacity-40 grayscale'
            }`}>
            <p className={`text-xs font-black uppercase tracking-wider ${idx === 0 ? 'text-blue-600' : idx === 1 ? 'text-emerald-600' : 'text-purple-600'}`}>{m.name}</p>
            <p className="text-[10px] text-gray-500 font-medium leading-tight mt-1">
              {idx === 0 ? 'Starts from the beginning and reads one by one.' : idx === 1 ? 'Jumps straight to the specific location instantly.' : 'Uses a lookup table to find the exact address.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Module5_1: React.FC = () => {
  const storageIntroQuiz = [
    {
      question: "Which of the following is the 'Root Container' that holds directories and files?",
      options: ["The CPU", "The File System", "A Record", "The Power Supply"],
      correctAnswer: 1,
      explanation: "A File System is the master structure that organizes all directories and files on a storage device."
    },
    {
      question: "Which file access method is most efficient for high-frequency database operations?",
      options: ["Sequential Access", "Random/Direct Access", "Manual Access", "No Access"],
      correctAnswer: 1,
      explanation: "Direct Access allows the system to jump straight to a specific block without reading everything before it, which is vital for fast database performance."
    },
    {
      question: "What happens during a 'Truncate' operation?",
      options: ["The file name is deleted, but the contents stay.", "The file contents are deleted, but the file attributes (like name/size) remain.", "The computer shuts down.", "The file is encrypted."],
      correctAnswer: 1,
      explanation: "Truncating a file wipes out its data while keeping the file record/metadata intact in the directory."
    },
    {
      question: "Which storage management attribute ensures that data can be brought back after a system crash?",
      options: ["Performance", "Reliability", "Capacity", "Recoverability"],
      correctAnswer: 3,
      explanation: "Recoverability involves having backups and logs to restore data if a failure occurs."
    },
    {
      question: "A collection of logically related data recorded on secondary storage is called a:",
      options: ["Process", "Thread", "File", "Register"],
      correctAnswer: 2,
      explanation: "A file is the fundamental unit of storage in an OS, representing a sequence of related records."
    }
  ];
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.1</div>
        <div className="lesson-title-main">
          <h1>Introduction to Storage Management</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Digital Treasures</h3>
        <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg mb-4">
          <p className="text-center font-semibold text-orange-800">
            How does an OS manage, organize, and protect everything stored in your system?
          </p>
        </div>
        <p>
          An OS manages storage by deciding where files should be placed, keeping track of free and used space, protecting data from unauthorized access, and optimizing performance through techniques like buffering, caching, and file allocation methods.
        </p>
        <p>Let's explore how an OS manages all this through Storage Management.</p>
      </section>

      <section className="content-section">
        <h3>Storage Management</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
          <p>
            Think of Storage Management like organizing your smartphone's storage. You have apps, photos, and files that need to be stored efficiently. To keep your phone running smoothly, you manage space by deleting unnecessary files, using cloud storage, setting up automatic backups, and securing your data with passwords. Just like an OS manages storage on a larger scale, you ensure your phone stays optimized and your data remains safe.
          </p>
        </div>
        <p>
          Storage Management involves the supervision of storage devices utilized for storing user and computer-generated data. It functions as a tool or set of processes administered by an administrator to ensure data and storage equipment safety.
        </p>
      </section>

      <section className="content-section">
        <h3>Key Attributes of Storage Management</h3>
        <ul>
          <li><strong>Performance:</strong> Ensuring efficient operation of storage devices.</li>
          <li><strong>Reliability:</strong> Establishing trustworthiness in data storage.</li>
          <li><strong>Recoverability:</strong> Implementing processes for data recovery.</li>
          <li><strong>Capacity:</strong> Managing and optimizing storage capacity.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Features of Storage Management</h3>
        <ul>
          <li><strong>Optimization of Storage Devices:</strong> The process is geared towards optimizing the use of storage devices.</li>
          <li><strong>Resource Allocation:</strong> Storage management must be allocated and managed as a crucial resource for optimal corporate benefit.</li>
          <li><strong>Performance Improvement:</strong> Used to enhance the performance of data storage resources.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>What is a File?</h3>
        <p>
          A file can be defined as a data structure which stores the sequence of records. Files are stored in a file system, which may exist on a disk or in the main memory. Files can be simple (plain text) or complex (specially-formatted).
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_files1.png" alt="" />
        </div>
        <p>
          The collection of files is known as <strong>Directory</strong>. The collection of directories at the different levels is known as <strong>File System</strong>.
        </p>
        <FileSystemAnimation />
      </section>

      <section className="content-section">
        <h3>Attributes of the File</h3>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_files2.png" alt="" />
        </div>
      </section>

      <section className="content-section">
        <h3>Operations on the File</h3>
        <p>A file is a collection of logically related data that is recorded on the secondary storage in the form of sequence of operations.</p>

        <h4>Create operation</h4>
        <p>This operation is used to create a file in the file system. The file system allocates space to the file and makes an entry in the appropriate directory.</p>

        <h4>Open operation</h4>
        <p>When the user wants to open a file, it provides a file name to open the particular file in the file system.</p>

        <h4>Write operation</h4>
        <p>This operation is used to write the information into a file. A system call write is issued that specifies the name of the file and the length of the data to be written.</p>

        <h4>Read operation</h4>
        <p>This operation reads the contents from a file. A Read pointer is maintained by the OS, pointing to the position up to which the data has been read.</p>

        <h4>Re-position or Seek operation</h4>
        <p>The seek system call re-positions the file pointers from the current position to a specific place in the file i.e. forward or backward.</p>

        <h4>Delete operation</h4>
        <p>Deleting the file will not only delete all the data stored inside the file, it also frees the disk space occupied by it.</p>

        <h4>Truncate operation</h4>
        <p>Truncating is simply deleting the file except deleting attributes. The file is not completely deleted although the information stored inside the file gets replaced.</p>

        <h4>Close operation</h4>
        <p>When the processing of the file is complete, it should be closed so that all the changes made permanent and all the resources occupied should be released.</p>

        <h4>Append operation</h4>
        <p>This operation adds data to the end of the file.</p>

        <h4>Rename operation</h4>
        <p>This operation is used to rename the existing file.</p>
      </section>

      <section className="content-section">
        <h3>File Access Methods</h3>
        <p>Let's look at various ways to access files stored in secondary memory.</p>

        <h4>Sequential Access</h4>
        <p>
          OS reads the file word by word. A pointer is maintained which initially points to the base address of the file. Most used method is sequential access due to the fact that most of the files such as text files, audio files, video files, need to be sequentially accessed.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_files10.png" alt="Sequential Access" className="rounded-lg shadow-lg max-w-md" />
        </div>

        <h4>Direct Access</h4>
        <p>
          Direct Access is mostly required in the case of database systems. The sequential access can be very slow and inefficient in such cases. This method allows the system to jump to a specific block instantly.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_files11.png" alt="Direct Access" className="rounded-lg shadow-lg max-w-md" />
        </div>

        <h4>Index Access</h4>
        <p>
          The index is nothing but the address of a record in the file. In index accessing, searching in a large database became very quick and easy but we need to have some extra space in the memory to store the index value.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_files12.png" alt="Index Access" className="rounded-lg shadow-lg max-w-md" />
        </div>

        <AccessMethodAnimation />
      </section>

      <section className="content-section">
        <h3>Directories</h3>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg mb-4">
          <p>
            A directory is like a bookshelf in a library. It organizes books (files) into sections so you can easily find what you need. Just as each book has a title, author, and genre, a directory keeps track of file names, types, and locations!
          </p>
        </div>
        <p>
          Directory can be defined as the listing of the related files on the disk. The directory may store some or the entire file attributes.
        </p>
        <p>
          To get the benefit of different file systems on the different operating systems, a hard disk can be divided into the number of partitions of different sizes. The partitions are also called volumes or mini disks.
        </p>
        <p>
          Each partition must have at least one directory in which all the files of the partition can be listed. A directory entry is maintained for each file in the directory which stores all the information related to that file.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_files3.png" alt="Directory Structure" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <p className="text-sm text-gray-600">
          This image represents a file system structure with storage partitions. It shows directories and files within partitions, where each file has associated metadata stored as directory entries containing attributes.
        </p>
      </section>

      <section className="content-section">
        <h3>Common Directory Operations</h3>
        <ul>
          <li>File Creation</li>
          <li>Search for the file</li>
          <li>File deletion</li>
          <li>Renaming the file</li>
          <li>Traversing Files</li>
          <li>Listing of files</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Bonus Content</h3>
        <p className="text-sm text-gray-600 mb-2">This part is optional and you can skip it if you want.</p>
        <ul>
          <li>
            <a href="https://www.ibm.com/topics/storage-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Storage management | IBM
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/structures-of-directory-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Structures of Directory in Operating System | GeeksforGeeks
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Great Job" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">Great job!</p>

        <Quiz
          title="Module 5.1 Quiz: Intro to Storage Management"
          questions={storageIntroQuiz}
          subject="OS"
          unitId={5}
          moduleId={1}
        />
      </section>
    </div>
  );
};

export default Module5_1;
