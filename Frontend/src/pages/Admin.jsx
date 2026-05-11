import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import API_URL from '../api';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [activeTab, setActiveTab] = useState('contacts');
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsRes, usersRes, quotesRes] = await Promise.all([
          fetch(`${API_URL}/admin/contacts`, { credentials: 'include' }),
          fetch(`${API_URL}/admin/users`, { credentials: 'include' }),
          fetch(`${API_URL}/admin/quotes`, { credentials: 'include' })
        ]);
        
        if (contactsRes.ok) setContacts(await contactsRes.json());
        if (usersRes.ok) setUsers(await usersRes.json());
        if (quotesRes.ok) setQuotes(await quotesRes.json());
      } catch (err) {
        console.error("Failed to fetch admin data", err);
      }
    };
    fetchData();
  }, []);

  const handleDeleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      const res = await fetch(`${API_URL}/admin/contacts/${id}`, { 
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        setContacts(contacts.filter(c => c._id !== id));
        toast.success('Submission deleted');
      } else {
        toast.error('Failed to delete');
      }
    }
  };

  if (!user || user.role !== 'admin') {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Access Denied</div>;
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Admin Dashboard</h1>
        
        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['contacts', 'users', 'quotes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl font-bold transition-all capitalize ${
                activeTab === tab 
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          {activeTab === 'contacts' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Name</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Email</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Subject</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Message</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">{contact.name}</td>
                      <td className="px-6 py-4">{contact.email}</td>
                      <td className="px-6 py-4 text-primary-500 font-medium">{contact.subject}</td>
                      <td className="px-6 py-4 max-w-xs truncate">{contact.message}</td>
                      <td className="px-6 py-4">
                        <button onClick={() => handleDeleteContact(contact._id)} className="text-red-500 hover:text-red-400 font-bold">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Name</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Email</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Role</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Created At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {users.map((u) => (
                    <tr key={u._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">{u.name}</td>
                      <td className="px-6 py-4">{u.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${u.role === 'admin' ? 'bg-amber-500/10 text-amber-500' : 'bg-green-500/10 text-green-500'}`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'quotes' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Name</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Service</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Budget</th>
                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {quotes.map((quote) => (
                    <tr key={quote._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">{quote.name}</td>
                      <td className="px-6 py-4 text-primary-500 font-bold">{quote.serviceRequired}</td>
                      <td className="px-6 py-4">{quote.budget}</td>
                      <td className="px-6 py-4 max-w-xs truncate">{quote.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Admin;
