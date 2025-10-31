import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Search, Home, Video, MessageSquare, Users, Phone, Send, UserPlus, LogOut, Menu, X, Play, MoreVertical, Bookmark } from 'lucide-react';

const BanjaraConnect = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  // Dummy data
  const dummyUsers = [
    { id: 1, name: 'Rajesh Kumar', avatar: '🎭', bio: 'Banjara culture enthusiast', followers: 234 },
    { id: 2, name: 'Priya Devi', avatar: '🌺', bio: 'Traditional artist', followers: 567 },
    { id: 3, name: 'Amit Singh', avatar: '🎨', bio: 'Folk music lover', followers: 890 },
    { id: 4, name: 'Meera Bai', avatar: '💃', bio: 'Dance performer', followers: 432 },
  ];

  const dummyPosts = [
    { id: 1, user: dummyUsers[0], content: 'Celebrating our rich Banjara heritage! 🎉', image: '🏔️', likes: 45, comments: 12, time: '2h ago' },
    { id: 2, user: dummyUsers[1], content: 'Traditional embroidery patterns from my grandmother 💖', image: '🧵', likes: 78, comments: 23, time: '4h ago' },
    { id: 3, user: dummyUsers[2], content: 'New folk song coming soon! Stay tuned 🎵', image: '🎼', likes: 92, comments: 34, time: '6h ago' },
  ];

  useEffect(() => {
    if (isLoggedIn) {
      setPosts(dummyPosts);
      setCurrentUser({ id: 5, name: 'You', avatar: '👤', mobile: '9876543210' });
    }
  }, [isLoggedIn]);

  // Login Component
  const LoginPage = () => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOTP = () => {
      if (mobile.length === 10) {
        setOtpSent(true);
      }
    };

    const handleLogin = () => {
      if (otp === '1234') {
        setIsLoggedIn(true);
        setCurrentPage('home');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-400">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎭</div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-2">
                Banjara Connect
              </h1>
              <p className="text-orange-600 font-semibold">जुड़िये अपनी जड़ों से</p>
            </div>

            {!otpSent ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-orange-700 font-semibold mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    maxLength="10"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter 10-digit mobile"
                    className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleSendOTP}
                  disabled={mobile.length !== 10}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send OTP
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-orange-700 font-semibold mb-2">Enter OTP</label>
                  <input
                    type="text"
                    maxLength="4"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 4-digit OTP (1234)"
                    className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-500 focus:outline-none text-center text-2xl tracking-widest"
                  />
                  <p className="text-sm text-orange-600 mt-2">Demo OTP: 1234</p>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => setOtpSent(false)}
                  className="w-full text-orange-600 py-2 font-semibold"
                >
                  Change Number
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Navigation
  const Navigation = () => (
    <nav className="bg-gradient-to-r from-white to-orange-50 border-b-4 border-orange-400 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🎭</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Banjara Connect
            </span>
          </div>
          
          <div className="hidden md:flex space-x-1">
            <NavButton icon={<Home size={20} />} label="Home" page="home" />
            <NavButton icon={<Search size={20} />} label="Search" page="search" />
            <NavButton icon={<Video size={20} />} label="Reels" page="reels" />
            <NavButton icon={<MessageSquare size={20} />} label="Messages" page="messages" />
            <NavButton icon={<Users size={20} />} label="Groups" page="groups" />
            <NavButton icon={<Phone size={20} />} label="Random Chat" page="randomchat" />
          </div>

          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden text-orange-600"
          >
            {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="md:hidden bg-white border-t-2 border-orange-200 py-2">
          <NavButton icon={<Home size={20} />} label="Home" page="home" mobile />
          <NavButton icon={<Search size={20} />} label="Search" page="search" mobile />
          <NavButton icon={<Video size={20} />} label="Reels" page="reels" mobile />
          <NavButton icon={<MessageSquare size={20} />} label="Messages" page="messages" mobile />
          <NavButton icon={<Users size={20} />} label="Groups" page="groups" mobile />
          <NavButton icon={<Phone size={20} />} label="Random Chat" page="randomchat" mobile />
        </div>
      )}
    </nav>
  );

  const NavButton = ({ icon, label, page, mobile }) => (
    <button
      onClick={() => {
        setCurrentPage(page);
        setShowMobileMenu(false);
      }}
      className={`${mobile ? 'w-full text-left' : ''} flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition ${
        currentPage === page
          ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white'
          : 'text-orange-700 hover:bg-orange-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  // Post Component
  const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
      <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden mb-4 hover:shadow-xl transition">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{post.user.avatar}</div>
            <div>
              <p className="font-bold text-orange-800">{post.user.name}</p>
              <p className="text-sm text-orange-600">{post.time}</p>
            </div>
          </div>
          <button className="text-orange-600 hover:bg-orange-100 p-2 rounded-full">
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="px-4 pb-3">
          <p className="text-gray-800">{post.content}</p>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-orange-50 h-64 flex items-center justify-center text-8xl border-y-2 border-orange-200">
          {post.image}
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between text-sm text-orange-600 font-semibold">
            <span>{post.likes + (liked ? 1 : 0)} likes</span>
            <span>{post.comments} comments</span>
          </div>

          <div className="flex items-center justify-around border-t-2 border-orange-200 pt-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition ${
                liked ? 'text-red-500' : 'text-orange-700 hover:bg-orange-100'
              }`}
            >
              <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold text-orange-700 hover:bg-orange-100 transition">
              <MessageCircle size={20} />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold text-orange-700 hover:bg-orange-100 transition">
              <Share2 size={20} />
              <span>Share</span>
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-xl transition ${
                saved ? 'text-orange-500' : 'text-orange-700 hover:bg-orange-100'
              }`}
            >
              <Bookmark size={20} fill={saved ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 pb-20">
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-2">Welcome to Banjara Connect! 🎉</h2>
          <p>Connect with your community, share your culture, and celebrate together!</p>
        </div>

        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );

  // Search Page
  const SearchPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-orange-200">
          <div className="flex items-center space-x-2">
            <Search className="text-orange-600" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search people, posts, groups..."
              className="flex-1 outline-none text-lg"
            />
          </div>
        </div>

        <div className="space-y-3">
          {dummyUsers.map(user => (
            <div key={user.id} className="bg-white rounded-2xl shadow-lg p-4 border-2 border-orange-200 hover:shadow-xl transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{user.avatar}</div>
                  <div>
                    <p className="font-bold text-orange-800">{user.name}</p>
                    <p className="text-sm text-orange-600">{user.bio}</p>
                    <p className="text-xs text-gray-500">{user.followers} followers</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Reels Page
  const ReelsPage = () => (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto h-screen bg-gradient-to-br from-orange-900 to-orange-600 relative flex items-center justify-center">
        <div className="text-center text-white space-y-4">
          <Play size={80} />
          <h3 className="text-2xl font-bold">Banjara Reels</h3>
          <p>Share your culture through short videos</p>
        </div>
        <div className="absolute right-4 bottom-20 space-y-6 text-white">
          <button className="flex flex-col items-center hover:scale-110 transition">
            <Heart size={32} />
            <span className="text-sm">45K</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition">
            <MessageCircle size={32} />
            <span className="text-sm">234</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 transition">
            <Share2 size={32} />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Messages Page
  const MessagesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl mx-auto h-screen flex">
        <div className="w-1/3 bg-white border-r-2 border-orange-200 overflow-y-auto">
          <div className="p-4 border-b-2 border-orange-200">
            <h2 className="text-xl font-bold text-orange-800">Messages</h2>
          </div>
          {dummyUsers.map(user => (
            <button
              key={user.id}
              onClick={() => setSelectedChat(user)}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-orange-50 border-b border-orange-100 transition ${
                selectedChat?.id === user.id ? 'bg-orange-100' : ''
              }`}
            >
              <div className="text-3xl">{user.avatar}</div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-orange-800">{user.name}</p>
                <p className="text-sm text-gray-500 truncate">Click to chat...</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex-1 bg-white flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b-2 border-orange-200 flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-white">
                <div className="text-3xl">{selectedChat.avatar}</div>
                <p className="font-bold text-orange-800">{selectedChat.name}</p>
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-orange-50 to-white">
                <div className="text-center text-gray-500 text-sm mb-4">Start of conversation</div>
              </div>
              <div className="p-4 border-t-2 border-orange-200 flex items-center space-x-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-xl border-2 border-orange-300 focus:border-orange-500 outline-none"
                />
                <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-3 rounded-xl hover:shadow-lg transition">
                  <Send size={20} />
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <MessageCircle size={64} className="mx-auto mb-4 text-orange-300" />
                <p className="text-xl">Select a chat to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Groups Page
  const GroupsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-2">Community Groups</h2>
          <p>Join groups and connect with like-minded people</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {['Traditional Arts', 'Folk Music', 'Cultural Events', 'Language Learning'].map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-200 hover:shadow-xl transition">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{['🎨', '🎵', '🎉', '📚'][idx]}</div>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.floor(Math.random() * 500) + 100} members
                </span>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">{group}</h3>
              <p className="text-gray-600 mb-4">Connect with enthusiasts and share your passion</p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-2 rounded-xl font-semibold hover:shadow-lg transition">
                Join Group
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Random Chat Page
  const RandomChatPage = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [connected, setConnected] = useState(false);

    const startSearch = () => {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setConnected(true);
      }, 2000);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-600 to-orange-500 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {!connected ? (
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-4 border-orange-400">
              <div className="text-8xl mb-6">📞</div>
              <h2 className="text-3xl font-bold text-orange-800 mb-4">Random Video Chat</h2>
              <p className="text-gray-600 mb-8">Connect with random people from the Banjara community</p>
              {isSearching ? (
                <div className="space-y-4">
                  <div className="animate-pulse text-orange-600 text-xl font-semibold">
                    Searching for someone...
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={startSearch}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition"
                >
                  Start Random Chat
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-400">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 flex items-center justify-between text-white">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">👤</div>
                  <div>
                    <p className="font-bold">Random User</p>
                    <p className="text-sm opacity-90">Connected</p>
                  </div>
                </div>
                <button
                  onClick={() => setConnected(false)}
                  className="bg-red-500 px-4 py-2 rounded-xl font-semibold hover:bg-red-600 transition"
                >
                  End Call
                </button>
              </div>
              <div className="bg-gray-900 aspect-video flex items-center justify-center text-white text-xl">
                <div className="text-center">
                  <Video size={64} className="mx-auto mb-4" />
                  <p>Video chat would appear here</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'search' && <SearchPage />}
      {currentPage === 'reels' && <ReelsPage />}
      {currentPage === 'messages' && <MessagesPage />}
      {currentPage === 'groups' && <GroupsPage />}
      {currentPage === 'randomchat' && <RandomChatPage />}
    </div>
  );
};

export default BanjaraConnect;