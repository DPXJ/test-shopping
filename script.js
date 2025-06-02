// 页面模板
const pageTemplates = {
    'home': `
        <div class="page home-page">
            <div class="page-header">
                <div class="page-title">首页</div>
            </div>
            <div class="banner">
                <div class="banner-image">
                    精品好货 限时特惠
                </div>
            </div>
            <div class="category-list">
                <div class="category-item" onclick="navigateTo('product-list')">
                    <div style="width: 60px; height: 60px; background: #ff6b6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">📱</div>
                    <span>手机数码</span>
                </div>
                <div class="category-item" onclick="navigateTo('product-list')">
                    <div style="width: 60px; height: 60px; background: #4ecdc4; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">👗</div>
                    <span>服装鞋包</span>
                </div>
                <div class="category-item" onclick="navigateTo('product-list')">
                    <div style="width: 60px; height: 60px; background: #45b7d1; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">💄</div>
                    <span>美妆护肤</span>
                </div>
                <div class="category-item" onclick="navigateTo('product-list')">
                    <div style="width: 60px; height: 60px; background: #f39c12; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">🍎</div>
                    <span>食品生鲜</span>
                </div>
            </div>
            <div class="product-list">
                <h2>热门商品</h2>
                <div class="product-grid">
                    <div class="product-item" onclick="navigateTo('product-detail')">
                        <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #ff6b6b, #ffa500); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">📱</div>
                        <h3>iPhone 15 Pro Max</h3>
                        <p class="price">¥8999</p>
                    </div>
                    <div class="product-item" onclick="navigateTo('product-detail')">
                        <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #4ecdc4, #44a08d); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">👟</div>
                        <h3>运动休闲鞋</h3>
                        <p class="price">¥299</p>
                    </div>
                    <div class="product-item" onclick="navigateTo('product-detail')">
                        <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">🎧</div>
                        <h3>无线蓝牙耳机</h3>
                        <p class="price">¥199</p>
                    </div>
                    <div class="product-item" onclick="navigateTo('product-detail')">
                        <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #f093fb, #f5576c); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">💄</div>
                        <h3>口红套装</h3>
                        <p class="price">¥99</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    'product-list': `
        <div class="page product-list-page">
            <div class="page-header">
                <div class="back-btn" onclick="goBack()"><</div>
                <div class="page-title">商品分类</div>
            </div>
            <div class="search-bar" style="margin-bottom: 20px;">
                <input type="text" placeholder="搜索商品">
                <button class="search-btn">🔍</button>
            </div>
            <div class="product-grid">
                <div class="product-item" onclick="navigateTo('product-detail')">
                    <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #ff6b6b, #ffa500); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">📱</div>
                    <h3>iPhone 15 Pro Max</h3>
                    <p class="price">¥8999</p>
                </div>
                <div class="product-item" onclick="navigateTo('product-detail')">
                    <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">💻</div>
                    <h3>MacBook Pro</h3>
                    <p class="price">¥12999</p>
                </div>
                <div class="product-item" onclick="navigateTo('product-detail')">
                    <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #4ecdc4, #44a08d); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">👟</div>
                    <h3>运动休闲鞋</h3>
                    <p class="price">¥299</p>
                </div>
                <div class="product-item" onclick="navigateTo('product-detail')">
                    <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #f093fb, #f5576c); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">💄</div>
                    <h3>口红套装</h3>
                    <p class="price">¥99</p>
                </div>
                <div class="product-item" onclick="navigateTo('product-detail')">
                    <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">🎧</div>
                    <h3>无线蓝牙耳机</h3>
                    <p class="price">¥199</p>
                </div>
                <div class="product-item" onclick="navigateTo('product-detail')">
                    <div style="width: 100%; height: 120px; background: linear-gradient(45deg, #f39c12, #e67e22); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; margin-bottom: 10px;">⌚</div>
                    <h3>智能手表</h3>
                    <p class="price">¥1299</p>
                </div>
            </div>
        </div>
    `,
    'product-detail': `
        <div class="page product-detail-page">
            <div class="page-header">
                <div class="back-btn" onclick="goBack()"><</div>
                <div class="page-title">商品详情</div>
            </div>
            <div class="product-images">
                <div style="width: 100%; height: 300px; background: linear-gradient(45deg, #ff6b6b, #ffa500); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 80px; margin-bottom: 20px;">📱</div>
            </div>
            <div class="product-info">
                <h2>iPhone 15 Pro Max</h2>
                <p class="price">¥8999</p>
                <div class="product-specs">
                    <h4>商品规格</h4>
                    <p>• 6.7英寸超视网膜XDR显示屏</p>
                    <p>• A17 Pro芯片，6核中央处理器</p>
                    <p>• 三摄像头系统：4800万像素主摄</p>
                    <p>• 1TB储存容量</p>
                </div>
                <div class="product-description">
                    <h4>商品描述</h4>
                    <p>全新iPhone 15 Pro Max，搭载最新A17 Pro芯片，性能强劲，拍照效果出色，是您的最佳选择。</p>
                </div>
                <button class="add-to-cart" onclick="addToCart()">加入购物车</button>
                <button class="buy-now" onclick="navigateTo('order-confirm')">立即购买</button>
            </div>
        </div>
    `,
    'cart': `
        <div class="page cart-page">
            <div class="page-header">
                <div class="page-title">购物车</div>
            </div>
            <div class="cart-items">
                <div class="cart-item">
                    <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #ff6b6b, #ffa500); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">📱</div>
                    <div class="item-info">
                        <h3>iPhone 15 Pro Max</h3>
                        <p class="price">¥8999</p>
                        <div class="quantity">
                            <button onclick="updateQuantity(-1)">-</button>
                            <span id="quantity">1</span>
                            <button onclick="updateQuantity(1)">+</button>
                        </div>
                    </div>
                </div>
                <div class="cart-item">
                    <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">🎧</div>
                    <div class="item-info">
                        <h3>无线蓝牙耳机</h3>
                        <p class="price">¥199</p>
                        <div class="quantity">
                            <button onclick="updateQuantity2(-1)">-</button>
                            <span id="quantity2">2</span>
                            <button onclick="updateQuantity2(1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-footer">
                <div class="total">总计: ¥<span id="total">9397</span></div>
                <button class="checkout" onclick="navigateTo('order-confirm')">去结算(2)</button>
            </div>
        </div>
    `,
    'order-confirm': `
        <div class="page order-confirm-page">
            <div class="page-header">
                <div class="back-btn" onclick="goBack()"><</div>
                <div class="page-title">确认订单</div>
            </div>
            <div class="address-section">
                <h3>收货地址</h3>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <p><strong>张三</strong> 13800138000</p>
                        <p>北京市朝阳区xxx街道xxx号xxx小区</p>
                    </div>
                    <span style="color: #ff6b6b;">></span>
                </div>
            </div>
            <div class="order-items" style="background: white; border-radius: 10px; padding: 15px; margin-bottom: 15px;">
                <h3>商品信息</h3>
                <div class="order-item" style="display: flex; gap: 15px; padding: 10px 0; border-bottom: 1px solid #eee;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #ff6b6b, #ffa500); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">📱</div>
                    <div class="item-info">
                        <h3>iPhone 15 Pro Max</h3>
                        <p class="price">¥8999</p>
                        <p class="quantity">x1</p>
                    </div>
                </div>
                <div class="order-item" style="display: flex; gap: 15px; padding: 10px 0;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">🎧</div>
                    <div class="item-info">
                        <h3>无线蓝牙耳机</h3>
                        <p class="price">¥199</p>
                        <p class="quantity">x2</p>
                    </div>
                </div>
            </div>
            <div class="payment-section">
                <h3>支付方式</h3>
                <div class="payment-methods">
                    <label style="padding: 10px 0;">
                        <input type="radio" name="payment" checked> 微信支付
                    </label>
                    <label style="padding: 10px 0;">
                        <input type="radio" name="payment"> 支付宝
                    </label>
                    <label style="padding: 10px 0;">
                        <input type="radio" name="payment"> 银行卡支付
                    </label>
                </div>
            </div>
            <div class="order-footer">
                <div class="total">实付金额: ¥9397</div>
                <button class="submit-order" onclick="navigateTo('payment')">提交订单</button>
            </div>
        </div>
    `,
    'payment': `
        <div class="page payment-page">
            <div class="page-header">
                <div class="back-btn" onclick="goBack()"><</div>
                <div class="page-title">微信支付</div>
            </div>
            <div class="payment-info">
                <h2>🔒 安全支付</h2>
                <p class="amount">¥9397</p>
                <div class="qr-code">
                    <div style="width: 200px; height: 200px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 60px; margin: 0 auto;">📱</div>
                </div>
                <p class="payment-tip">请使用微信扫码支付</p>
                <div style="margin: 20px 0;">
                    <p style="color: #666; font-size: 14px;">支付剩余时间: <span style="color: #ff6b6b;" id="countdown">14:59</span></p>
                </div>
                <button class="payment-success" onclick="simulatePayment()">模拟支付完成</button>
            </div>
        </div>
    `,
    'payment-success': `
        <div class="page payment-success-page">
            <div class="success-icon">✓</div>
            <div class="success-title">支付成功</div>
            <div class="success-amount">¥9397</div>
            <div class="success-info">
                <div class="success-info-item">
                    <span>订单号</span>
                    <span>202403201530001</span>
                </div>
                <div class="success-info-item">
                    <span>支付方式</span>
                    <span>微信支付</span>
                </div>
                <div class="success-info-item">
                    <span>支付时间</span>
                    <span>${new Date().toLocaleString()}</span>
                </div>
                <div class="success-info-item">
                    <span>商家</span>
                    <span>精品商城</span>
                </div>
            </div>
            <div class="success-buttons">
                <button class="btn-secondary" onclick="navigateTo('order-list')">查看订单</button>
                <button class="btn-primary" onclick="navigateTo('home')">返回首页</button>
            </div>
        </div>
    `,
    'order-list': `
        <div class="page order-list-page">
            <div class="page-header">
                <div class="page-title">我的订单</div>
            </div>
            <div class="tab-container">
                <div class="tab-list">
                    <div class="tab-item active" onclick="switchOrderTab('all')">全部</div>
                    <div class="tab-item" onclick="switchOrderTab('pending')">待付款</div>
                    <div class="tab-item" onclick="switchOrderTab('shipping')">待收货</div>
                    <div class="tab-item" onclick="switchOrderTab('review')">待评价</div>
                </div>
            </div>
            <div class="order-list" id="order-content">
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403201530001</span>
                        <span class="order-status">✅ 已完成</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #ff6b6b, #ffa500); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">📱</div>
                        <div class="order-info">
                            <h3>iPhone 15 Pro Max</h3>
                            <p class="price">¥8999</p>
                            <p class="order-time">2024-03-20 15:30</p>
                        </div>
                    </div>
                </div>
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403191200002</span>
                        <span class="order-status" style="color: #f39c12;">🚚 配送中</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #4ecdc4, #44a08d); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">👟</div>
                        <div class="order-info">
                            <h3>运动休闲鞋</h3>
                            <p class="price">¥299</p>
                            <p class="order-time">2024-03-19 12:00</p>
                        </div>
                    </div>
                </div>
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403180900003</span>
                        <span class="order-status" style="color: #27ae60;">💰 待付款</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #f093fb, #f5576c); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">💄</div>
                        <div class="order-info">
                            <h3>口红套装</h3>
                            <p class="price">¥99</p>
                            <p class="order-time">2024-03-18 09:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// 全局变量
let cartQuantity = 1;
let cartQuantity2 = 2;
let navigationStack = ['home']; // 导航栈，用于返回功能

// 页面导航函数
function navigateTo(page) {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = pageTemplates[page];
    
    // 添加到导航栈
    if (navigationStack[navigationStack.length - 1] !== page) {
        navigationStack.push(page);
    }
    
    // 更新底部导航栏激活状态
    updateBottomNav(page);
    
    // 更新左侧导航菜单激活状态
    updateSidebarNav(page);
    
    // 如果是支付页面，启动倒计时
    if (page === 'payment') {
        startPaymentCountdown();
    }
}

// 返回功能
function goBack() {
    if (navigationStack.length > 1) {
        navigationStack.pop(); // 移除当前页面
        const previousPage = navigationStack[navigationStack.length - 1];
        const pageContent = document.getElementById('pageContent');
        pageContent.innerHTML = pageTemplates[previousPage];
        
        // 更新导航状态
        updateBottomNav(previousPage);
        updateSidebarNav(previousPage);
    } else {
        navigateTo('home');
    }
}

// 更新底部导航栏激活状态
function updateBottomNav(page) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        const targetPage = item.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (targetPage === page) {
            item.classList.add('active');
        }
    });
}

// 更新左侧导航菜单激活状态
function updateSidebarNav(page) {
    const menuItems = document.querySelectorAll('.menu-item li');
    menuItems.forEach(item => {
        item.classList.remove('active');
        const targetPage = item.getAttribute('data-page');
        if (targetPage === page) {
            item.classList.add('active');
        }
    });
}

// 订单Tab切换
function switchOrderTab(tab) {
    // 更新tab激活状态
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
    
    // 根据tab显示不同订单
    const orderContent = document.getElementById('order-content');
    let ordersHtml = '';
    
    switch(tab) {
        case 'all':
            ordersHtml = `
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403201530001</span>
                        <span class="order-status">✅ 已完成</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #ff6b6b, #ffa500); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">📱</div>
                        <div class="order-info">
                            <h3>iPhone 15 Pro Max</h3>
                            <p class="price">¥8999</p>
                            <p class="order-time">2024-03-20 15:30</p>
                        </div>
                    </div>
                </div>
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403191200002</span>
                        <span class="order-status" style="color: #f39c12;">🚚 配送中</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #4ecdc4, #44a08d); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">👟</div>
                        <div class="order-info">
                            <h3>运动休闲鞋</h3>
                            <p class="price">¥299</p>
                            <p class="order-time">2024-03-19 12:00</p>
                        </div>
                    </div>
                </div>
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403180900003</span>
                        <span class="order-status" style="color: #27ae60;">💰 待付款</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #f093fb, #f5576c); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">💄</div>
                        <div class="order-info">
                            <h3>口红套装</h3>
                            <p class="price">¥99</p>
                            <p class="order-time">2024-03-18 09:00</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'pending':
            ordersHtml = `
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403180900003</span>
                        <span class="order-status" style="color: #27ae60;">💰 待付款</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #f093fb, #f5576c); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">💄</div>
                        <div class="order-info">
                            <h3>口红套装</h3>
                            <p class="price">¥99</p>
                            <p class="order-time">2024-03-18 09:00</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'shipping':
            ordersHtml = `
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403191200002</span>
                        <span class="order-status" style="color: #f39c12;">🚚 配送中</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #4ecdc4, #44a08d); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">👟</div>
                        <div class="order-info">
                            <h3>运动休闲鞋</h3>
                            <p class="price">¥299</p>
                            <p class="order-time">2024-03-19 12:00</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'review':
            ordersHtml = `
                <div class="order-item">
                    <div class="order-header">
                        <span class="order-id">订单号：202403201530001</span>
                        <span class="order-status">✅ 待评价</span>
                    </div>
                    <div class="order-content">
                        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #ff6b6b, #ffa500); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">📱</div>
                        <div class="order-info">
                            <h3>iPhone 15 Pro Max</h3>
                            <p class="price">¥8999</p>
                            <p class="order-time">2024-03-20 15:30</p>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    orderContent.innerHTML = ordersHtml;
}

// 支付倒计时
function startPaymentCountdown() {
    let minutes = 14;
    let seconds = 59;
    
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    const timer = setInterval(() => {
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countdownElement.textContent = display;
        
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                countdownElement.textContent = '支付超时';
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
    }, 1000);
}

// 加入购物车
function addToCart() {
    alert('商品已加入购物车！');
    navigateTo('cart');
}

// 更新购物车数量
function updateQuantity(change) {
    cartQuantity = Math.max(1, cartQuantity + change);
    document.getElementById('quantity').textContent = cartQuantity;
    updateTotal();
}

function updateQuantity2(change) {
    cartQuantity2 = Math.max(1, cartQuantity2 + change);
    document.getElementById('quantity2').textContent = cartQuantity2;
    updateTotal();
}

// 更新总价
function updateTotal() {
    const total = 8999 * cartQuantity + 199 * cartQuantity2;
    document.getElementById('total').textContent = total;
    document.querySelector('.checkout').textContent = `去结算(${cartQuantity + cartQuantity2})`;
}

// 模拟支付
function simulatePayment() {
    // 显示支付处理中的状态
    const btn = document.querySelector('.payment-success');
    btn.textContent = '支付处理中...';
    btn.disabled = true;
    
    setTimeout(() => {
        navigateTo('payment-success');
    }, 2000);
}

// 重置按钮事件监听
document.addEventListener('DOMContentLoaded', function() {
    // 初始化时设置首页为激活状态
    updateBottomNav('home');
    updateSidebarNav('home');
    
    document.getElementById('resetBtn').addEventListener('click', () => {
        cartQuantity = 1;
        cartQuantity2 = 2;
        navigationStack = ['home'];
        navigateTo('home');
    });

    // 菜单项点击事件
    document.querySelectorAll('.menu-item li').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            navigateTo(page);
        });
    });
}); 