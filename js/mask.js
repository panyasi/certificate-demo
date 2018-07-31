
$(function(){
	const maskPage = {
		data:{
			user_name:'Jay',
			user_pic:null,
			sex_id:'男',
			province_id:2,
			city_id:52,
			career_status:2,
			career_type:"技术",
			school_year_enter:null,
			work_experience:1,
			career_interest:['120-1','119-2'],
			ca_status:null,
		},
		init:function(){
			this.bind();
		},
		bind:function(){
			$('.showmask-btn').on('click',this.showMask);
 			$('body').on('click','.close-btn',this.closePage);
 			$('body').on('click','#user-sex-btn',this.userSexBtn);
			$('body').on('click','.user-sex-list .user-sex-item',this.userSexSelect);
			$('body').on('click','#user-province-btn',this.userProvinceBtn);
			$('body').on('click','.user-province-list .user-province-item',this.userProvinceSelect);
			$('body').on('click','#user-city-btn',this.userCityBtn);
			$('body').on('click','.user-city-list .user-city-item',this.userCitySelect);
			$('body').on('click','#student-button-item',this.userStudentSelect);
			$('body').on('click','#user-grade-btn',this.userGradeBtn);
			$('body').on('click','.user-grade-list .user-grade-item',this.userGradeSelect);
			$('body').on('click','#user-enrollment-btn',this.userEnrollmentBtn);
			$('body').on('click','.user-enrollment-list .user-enrollment-item',this.userEnrollmentSelect);
			$('body').on('click','#employee-button-item',this.userEmployeeSelect);
			$('body').on('click','#user-industry-btn',this.userIndustryBtn);
			$('body').on('click','.user-industry-list .user-industry-item',this.userIndustrySelect);
			$('body').on('click','#user-workingyear-btn',this.userWorkingyearBtn);
			$('body').on('click','.user-workingyear-list .user-workingyear-item',this.userWorkingyearSelect);
			$('body').on('click','#unemployed-button-item',this.userUnemployedSelect);
			$('body').on('click','#next-btn.active',this.showSecondTemplete);
			$('body').on('click','.type-item',this.jobTypeSelct);
			$('body').on('click','#type-pre-btn',this.preFirstSectionShow);
			$('body').on('click','#type-next-btn.active',this.showThirdTemplete);
			$('body').on('click','.level-select',this.userLevelSelect);
			$('body').on('click','#level-pre-btn',this.preSecondSectionShow);
			$('body').on('mouseover','.item-level li',this.interestLevelLineOver);
			$('body').on('mouseout','.item-level li',this.interestLevelLineOut)
			$('body').on('click','#level-apply-btn.active',this.showFourthTemplete);
			$('body').on('click','#dynamic-code-send',this.dynamicCodeSend);
			$('body').on('input','#dynamic-code',this.entryDynamicCode);
			$('body').on('click','#binding-btn.active',this.showFifthTemplete);
		},
		showMask:function(){
			let html = `
			<div class="mask-container">
			</div>`
		    $('body').append(html);
		    maskPage.showFirstTemplete();
		},
		closePage:function(){
			$('.mask-container').remove();
		},
		arrInterest:[],
		workingYearData:[{
            id: 1,
            name: '1年以下'
        },{
            id: 2,
            name: '1-2年'
        },{
            id: 3,
            name: '3-5年'
        },{
            id: 4,
            name: '6-10年'
        },{
            id: 5,
            name: '10年以上'
        }],
        InterestData:[{
            item_id: 114,
            name: 'Web 前端工程师'
        },{
            item_id: 115,
            name: 'Android 开发工程师'
        },{
            item_id: 116,
            name: 'iOS 开发工程师'
        },{
            item_id: 117,
            name: 'GO 语言工程师'
        },{
            item_id: 118,
            name: 'Python Web 工程师'
        },{
            item_id: 119,
            name: 'PHP 工程师'
        },{
            item_id: 120,
            name: 'Java Web 工程师'
        }],
		showFirstTemplete:function(){
			let sex = maskPage.data.sex_id;
			let name = maskPage.data.user_name;
			let province = maskPage.data.province_id;
			let city = maskPage.data.city_id;
			let careerStatus = maskPage.data.career_status;
			let careerType = maskPage.data.career_type;
			let schoolYear = maskPage.data.school_year_enter;
			let workExperience = maskPage.data.work_experience;
			let provinceText = "省";
			let cityText = "市";
			let gradeText = "你所在的年级";
			let enrollmentText = "入学年份";
			let industryText = "您所从事的职业";
			let workExperienceText = "工作年限:"
			let dataIndex = null;
			let p_html = "";
			let c_html = "";
			let enrollment_html = maskPage.setEnrollment();

			console.log(maskPage.data.career_type)
			if(careerType !==null && schoolYear !== null){
				gradeText = careerType;
				enrollmentText = enrollmentText
			}
			if(careerType !==null && workExperience !== null){
				industryText = careerType;
				maskPage.workingYearData.forEach(w_data=>{
					if(workExperience == w_data.id){
						workExperienceText = w_data.name;
					}
				})	
			}
			data_area.child.forEach((p_data,index) => {
				let p_id = p_data.id;
				let p_name = p_data.name;
				var appendOptions = `<li class="user-province-item" data-value="${p_id}">${p_name}</li>`
				p_html += appendOptions
				if(province == p_id){
					provinceText = p_name;
					dataIndex = index;
				}
			});
			data_area.child[dataIndex].child.forEach(c_data =>{
				let c_id = c_data.id;
				let c_name = c_data.name;
				var appendOptions = `<li class="user-city-item" data-value="${c_id}">${c_name}</li>` 
				c_html += appendOptions
				if(city == c_id){
					cityText = c_name
				}
			});
			let html = `
				<div class="maskshield"></div>
				<div class="step-1-section">
					<div class="close-btn">
						<img src="./images/close.png" alt="logo">
					</div>	
					<div class="head-box">
						<div class="title-container">
							<p class="title">成为认证学员</p>
							<p class="title-desc">成为极客学院认证学员，点亮专属身份标识，<span>免费观看</span>全站 80% 以上会员课程。</p>
						</div>
						<div class="step-container">
							第 1 步<span class="total-step"> / 共 3 步</span>
						</div>
					</div>
					<div class="content-box">
						<div class="list-1">
							<div class="user-avatar">
								<img src="./images/head.png" alt="logo">
							</div>
							<p class="user-name">${name}</p>
						</div>
						<div class="list-2">
							<div class="user-info-item">
								<div class="user-sex-item">
									<span class="button-label">性别：</span>
									<div class="user-sex-select">
										<button id="user-sex-btn" class="user-sex-btn" data-value="${sex}">${sex}</button>
										<ul class="user-sex-list">
											<li class="user-sex-item" data-value="男">男</li>
											<li class="user-sex-item" data-value="女">女</li>
										</ul>
									</div>
								</div>
								<div class="user-site-item">
									<span class="button-label">现居住地：</span>
									<div class="user-province-select">
										<button class="user-province-btn" id="user-province-btn" data-value="${province}">${provinceText}</button>
										<ul class="user-province-list">
											${p_html}
										</ul>
									</div>
									<div class="user-city-select">
										<button class="user-city-btn" id="user-city-btn" data-value="${city}">${cityText}</button>
										<ul class="user-city-list">
											${c_html}
										</ul>
									</div>
								</div>
							</div>
							<div class="user-situation-item">
								<span class="button-label">您的当前状态：</span>
								<div class="user-situation-select">
									<div class="user-student">
										<div class="${careerStatus==1 ? 'button-item active' : 'button-item'}" id="student-button-item" data-value="${careerStatus}">学生</div>
										<div class="${careerStatus==1&&careerType !== null && schoolYear !== null? 'student-info-item active' : 'student-info-item'}">
											<div class="user-grade-select">
												<button class="user-grade-btn" id="user-grade-btn" data-value="${careerType}">${gradeText}</button>
												<ul class="user-grade-list">
													<li class="user-grade-item" data-value="高中及以下">高中及以下</li>
													<li class="user-grade-item" data-value="专科">专科</li>
													<li class="user-grade-item" data-value="大学本科">大学本科</li>
													<li class="user-grade-item" data-value="研究生及以上">研究生及以上</li>
												</ul>
											</div>
											<div class="user-enrollment-select">
												<button class="user-enrollment-btn" id="user-enrollment-btn" data-value="${schoolYear}">${schoolYear == null? enrollmentText: schoolYear}</button>
												<ul class="user-enrollment-list">
													${enrollment_html}
												</ul>
											</div>
										</div>
									</div>
									<div class="user-employee">
										<div class="${careerStatus==2 ?'button-item active' : 'button-item'}" id="employee-button-item" data-value="${careerStatus}">在职</div>
										<div class="${careerStatus==2 && careerType !== null && workExperience !== null? 'employee-info-item active' : 'employee-info-item'}">
											<div class="user-industry-select">
												<button class="user-industry-btn" id="user-industry-btn" data-value="${careerType}">${industryText}</button>
												<ul class="user-industry-list">
													<li class="user-industry-item" data-value="技术">技术</li>
													<li class="user-industry-item" data-value="产品">产品</li>
													<li class="user-industry-item" data-value="设计">设计</li>
													<li class="user-industry-item" data-value="测试">测试</li>
													<li class="user-industry-item" data-value="运营">运营</li>
													<li class="user-industry-item" data-value="其他">其他</li>
												</ul>
											</div>
											<div class="user-workingyear-select">
												<button class="user-workingyear-btn" id="user-workingyear-btn" data-value="${workExperience}">${workExperienceText}</button>
												<ul class="user-workingyear-list">
													<li class="user-workingyear-item" data-value="1">1年以下</li>
													<li class="user-workingyear-item" data-value="2">1-2 年</li>
													<li class="user-workingyear-item" data-value="3">3-5年</li>
													<li class="user-workingyear-item" data-value="4">6-10年</li>
													<li class="user-workingyear-item" data-value="5">10年以上</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="user-unemployed">
										<div class="${careerStatus==3 ? 'button-item active' : 'button-item'} " id="unemployed-button-item" data-value="${careerStatus}">待业</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="check-box">
						<button class="next-btn" id="next-btn">下一步</button>
					</div>
				</div>
				`
			$('.mask-container').html(html);

			if(careerType !== null && schoolYear !== null){
				$('.check-box').addClass('active');
			};
			
			if(careerType !==null && workExperience !== null){
				$('.check-box').addClass('active');		
			}
			maskPage.heightLightBtn();
		},
		setEnrollment:function(){
			var enrollment_html = '';
			var startdate = 1976;
			var enddate = new Date().getUTCFullYear();
			for(var i = enddate; i > startdate;i--){
				var appendOptions = `<li class="user-enrollment-item" data-value="${i}">${i}</li>`
				enrollment_html += appendOptions;
			}
			return enrollment_html;
		},
		userSexBtn:function(){
			$('.user-sex-list').toggleClass('active');
		},
		userSexSelect:function(){
			$('.user-sex-list').removeClass('active');			
			var thisValue = $(this).data('value');
			maskPage.data.sex_id = thisValue
			$('#user-sex-btn').attr('data-value',thisValue);
			$('#user-sex-btn').text(thisValue);
			maskPage.heightLightBtn();
		},
		userProvinceBtn:function(){
			$('.user-province-list').toggleClass('active');
		},
		userProvinceSelect:function(){
			var thisValue = $(this).data('value');
			var thisText = $(this).text();
			$('#user-province-btn').attr('data-value',thisValue);
			$('#user-province-btn').text(thisText);
			var provinceIndex = $(this).index();
			maskPage.data.province_id = thisValue;
			maskPage.data.city_id = null;
			$('.user-city-list').addClass('active');
			$('.user-province-list').removeClass('active');
			$('#user-city-btn').attr('data-value','');
			$('#user-city-btn').text('市');
			maskPage.heightLightBtn();
		},
		userCityBtn:function(){
			$('.user-city-list').toggleClass('active');
		},
		userCitySelect:function(){
			var thisText = $(this).text();
			var thisValue = $(this).data('value');
			maskPage.data.city_id = thisValue;
			$('#user-city-btn').attr('data-value',thisValue);
			$('#user-city-btn').text(thisText);
			$('.user-city-list').removeClass('active');
			maskPage.heightLightBtn(); 
		},
		userStudentSelect:function(){
			$(this).addClass('active');
			$(this).attr('data-value',"1");
			maskPage.data.career_status = $(this).data('value');	
			$('.student-info-item').addClass('active');
			$('.employee-info-item').removeClass('active');
			$('.check-box').addClass('active');
			$('#employee-button-item').removeClass('active');
			$('#unemployed-button-item').removeClass('active');
			$('#user-industry-btn').attr('data-value','');
			$('#user-industry-btn').text('您所从事的职业');
			maskPage.data.career_type = null;
			$('#user-workingyear-btn').attr('data-value','');
			$('#user-workingyear-btn').text('工作年限:');
			maskPage.data.work_experience = null;
			maskPage.heightLightBtn();
		},
		userGradeBtn:function(){
			$('.user-grade-list').toggleClass('active')
		},
		userGradeSelect:function(){
			var thisText = $(this).text();
			var thisValue = $(this).data('value');
			maskPage.data.career_type = thisValue;
			$('#user-grade-btn').attr('data-value',thisValue);
			$('#user-grade-btn').text(thisText);
			$('.user-grade-list').removeClass('active');
			maskPage.heightLightBtn();
		},
		userEnrollmentBtn:function(){
			$('.user-enrollment-list').toggleClass('active')
		},
		userEnrollmentSelect:function(){
			var thisText = $(this).text();
			var thisValue = $(this).data('value');
			maskPage.data.school_year_enter = thisValue;
			$('#user-enrollment-btn').attr('data-value',thisValue);
			$('#user-enrollment-btn').text(thisText);
			$('.user-enrollment-list').removeClass('active');
			maskPage.heightLightBtn();
		},
		userEmployeeSelect:function(){
			$(this).addClass('active');
			$(this).attr('data-value',"2");
			maskPage.data.career_status = $(this).data('value');
			$('.employee-info-item').addClass('active');
			$('.student-info-item').removeClass('active');				
			$('.check-box').addClass('active');
			$('#student-button-item').removeClass('active');
			$('#unemployed-button-item').removeClass('active');
			$('#user-grade-btn').attr('data-value','');
			$('#user-grade-btn').text('你所在的年级');
			maskPage.data.career_type = null;
			$('#user-enrollment-btn').attr('data-value','');
			$('#user-enrollment-btn').text('入学年份:');
			maskPage.data.school_year_enter = null;
			maskPage.heightLightBtn();
			console.log(maskPage.data)
		},
		userIndustryBtn:function(){
			console.log('ff')
			$('.user-industry-list').toggleClass('active')
		},
		userIndustrySelect:function(){
			var thisText = $(this).text();
			var thisValue = $(this).data('value');
			if(maskPage.data.career_status == 2){
				maskPage.data.career_type = thisValue;
			}else{
				maskPage.data.career_type = null;
			}
			$('#user-industry-btn').attr('data-value',thisValue);
			$('#user-industry-btn').text(thisText);
			$('.user-industry-list').removeClass('active');
			maskPage.heightLightBtn();
		},
		userWorkingyearBtn:function(){
			$('.user-workingyear-list').toggleClass('active')
		},
		userWorkingyearSelect:function(){
			var thisText = $(this).text();
			var thisValue = $(this).data('value');
			maskPage.data.work_experience = thisValue;
			$('#user-workingyear-btn').attr('data-value',thisValue);
			$('#user-workingyear-btn').text(thisText);
			$('.user-workingyear-list').removeClass('active');
			maskPage.heightLightBtn();
			console.log(maskPage.data)
		},
		userUnemployedSelect:function(){
			$(this).addClass('active');	
			$(this).attr('data-value',"3");
			maskPage.data.career_status = $(this).data('value');
			maskPage.data.career_type = null;
			maskPage.data.school_year_enter = null;
			maskPage.data.work_experience = null,	
			$('.employee-info-item').removeClass('active');
			$('.student-info-item').removeClass('active');
			$('#employee-button-item').removeClass('active');
			$('#student-button-item').removeClass('active');
			maskPage.heightLightBtn();
		},
		heightLightBtn:function(){
			let hasSexId = maskPage.data.sex_id !== null;
			let hasProvinceId = maskPage.data.province_id !== null;
			let hasCityId = maskPage.data.city_id !== null;
			let hasCareerType = maskPage.data.career_type !== null;
			let hasSchoolYearEnter = maskPage.data.school_year_enter !== null;
			let workExperience = maskPage.data.work_experience !== null;
			if(hasSexId && hasProvinceId && hasCityId && hasCareerType && hasSchoolYearEnter){
				$('#next-btn').addClass('active');
				console.log('777not')
			}else if(hasSexId && hasProvinceId && hasCityId && hasCareerType && workExperience){
				$('#next-btn').addClass('active');
				console.log('999bit')
			}else if(hasSexId && hasProvinceId && hasCityId && maskPage.data.career_status==3){
				$('#next-btn').addClass('active');
				console.log('0000000')
			}else{
				$('#next-btn').removeClass('active');
			}
			console.log(maskPage.data)
		},
		showSecondTemplete:function(){
			let arrInterest = maskPage.data.career_interest.map(data => Number(data.split('-')[0]));
			console.log(arrInterest)
			let html = `
				<div class="maskshield"></div>
				<div class="step-2-section">
					<div class="close-btn">
						<img src="./images/close.png" alt="logo">
					</div>
					<div class="head-box">				
						<div class="title-container">
							<p class="title">成为认证学员</p>
							<p class="title-desc">成为极客学院认证学员，点亮专属身份标识，<span>免费观看</span>全站 80% 以上会员课程。</p>
						</div>
						<div class="step-container">
							<span class="current-step">第 2 步</span><span class="total-step"> / 共 3 步</span>
						</div>
					</div>
					<div class="content-box">
						<p class="type-title">选择你感兴趣的职业方向（最多可选择 3 项）<span>系统将根据您的选择为您推荐合适的课程</span></p>
						<div class="type-list">
							<div class="${arrInterest.indexOf(114) >= 0? 'type-item active':'type-item'}" id="type-web" data-value="114">Web 前端工程师</div>
							<div class="${arrInterest.indexOf(115) >= 0? 'type-item active':'type-item'}" id="type-android" data-value="115">Android 开发工程师</div>
							<div class="${arrInterest.indexOf(116) >= 0? 'type-item active':'type-item'}" id="type-ios" data-value="116">iOS 开发工程师</div>
							<div class="${arrInterest.indexOf(117) >= 0? 'type-item active':'type-item'}" id="type-go" data-value="117">GO 语言工程师</div>
							<div class="${arrInterest.indexOf(118) >= 0? 'type-item active':'type-item'}" id="type-python" data-value="118">Python Web工程师</div>
							<div class="${arrInterest.indexOf(119) >= 0? 'type-item active':'type-item'}" id="type-php" data-value="119">PHP 工程师</div>
							<div class="${arrInterest.indexOf(120) >= 0? 'type-item active':'type-item'}" id="type-java" data-value="120">Java Web 工程师</div>
						</div>
					</div>
					<div class="check-box">
						<button class="type-pre-btn" id="type-pre-btn">上一步</button>
						<button class="${arrInterest.length > 0 ? 'type-next-btn active' : 'type-next-btn'}" id="type-next-btn">下一步</button>
					</div>
				</div>`
			$('.mask-container').html(html)
		},
		jobTypeSelct:function(){
			var interestActive = $(this).data('value');
			var strInterestActive = interestActive + '-' + 0;
			var arrCareerInterest = maskPage.data.career_interest;
			let tmpIndex = null;
			let hasKey = false;
			
			arrCareerInterest.forEach((data,index) => {
				let typeId = data.split('-')[0];
				if( typeId == interestActive){
					tmpIndex = index;
					hasKey = true
				}
			})
			if(hasKey){
				arrCareerInterest.splice(tmpIndex,1);
				$(this).removeClass('active')
			}else if(arrCareerInterest.length < 3){
				arrCareerInterest.push(strInterestActive);
				$(this).addClass('active');
			}
			console.log(arrCareerInterest)
			if(arrCareerInterest.length ==0){
				$('#type-next-btn').removeClass('active');
			}else{
				$('#type-next-btn').addClass('active')
			}
		},
		preFirstSectionShow:function(){
			maskPage.showFirstTemplete();
		},
		showThirdTemplete:function(){
			var setInterestLevel = maskPage.setInterestLevel();
			let html = `
			<div class="maskshield"></div>
			<div class="step-3-section">
				<div class="close-btn">
					<img src="./images/close.png" alt="logo">
				</div>
				<div class="head-box">
					<div class="title-container">
						<p class="title">成为认证学员</p>
						<p class="title-desc">成为极客学院认证学员，点亮专属身份标识，<span>免费观看</span>全站 80% 以上会员课程。</p>
					</div>
					<div class="step-container">
						<span class="current-step">第 3 步</span><span class="total-step"> / 共 3 步</span>
					</div>
				</div>
				<div class="content-box">
					<p class="level-title">您在这些方向上当前的水平如何？<span>系统将根据您的选择为您推荐合适的课程</span></p>
					<div class="level-list-container">				
						${setInterestLevel}
					</div>
				</div>
				<div class="check-box">
					<button class="level-pre-btn" id="level-pre-btn">上一步</button>
					<button class="level-apply-btn" id="level-apply-btn">申请认证</button>
				</div>
			</div>`
			$('.mask-container').html(html);
			maskPage.showLevelBtn();
		},
		setInterestLevel:function(){
			let InterestData    = maskPage.InterestData;
			let career_interest = maskPage.data.career_interest;
			let html = '';
			InterestData.forEach( i_data =>{
				career_interest.forEach( (c_data,index) => {
					let typeData = c_data.split('-')[0];
					let levelData = c_data.split('-')[1];
					if(i_data.item_id == typeData){
						let levelList = `
							<div class="level-list">
								<p class="list-title">${i_data.name}</p>
								<ul class="item-level">
									<li class="${levelData==1?'level-select active':'level-select'}" data-id="${i_data.item_id}" data-value="1">完全不了解</li>
									<li class="${levelData==2?'level-select active':'level-select'}" data-id="${i_data.item_id}" data-value="2">有点了解</li>
									<li class="${levelData==3?'level-select active':'level-select'}" data-id="${i_data.item_id}" data-value="3">熟悉</li>
									<li class="${levelData==4?'level-select active':'level-select'}" data-id="${i_data.item_id}" data-value="4">精通</li>
								</ul>
								<span class="${levelData==1||levelData==2 ||levelData==3 ||levelData==4?'light-1 active':'light-1'}" ></span>
								<span class="${levelData==2||levelData==3||levelData==4?'light-2 active':'light-2'}"></span>
								<span class="${levelData==3||levelData==4?'light-3 active':'light-3'}"></span>
								<span class="${levelData==4?'light-4 active':'light-4'}"></span>
							</div>`;
						html += levelList;
					}
				})
			});
			return html;
		},
		userLevelSelect:function(){
			var thisId = $(this).data('id');
			var thisParent = $(this).parents('.level-list');
			var thisValue = $(this).data('value');
			var x = $('.light-1')
			console.log($('thisParent.light-1'))
			var thisInterest = thisId +'-'+ thisValue;
			var haskey = false;
			var tmpIndex = null;
			var thisLevel = null;
			maskPage.data.career_interest.forEach((data,index)=>{
				let i_key = data.split('-')[0];
				let l_key = data.split('-')[1];
				console.log(thisValue)
				if(i_key == thisId){
					thisLevel = l_key
					haskey = true;
					tmpIndex = index;
				};
				if(thisValue == 0){
					thisParent.find('.light-1').removeClass('active')
					thisParent.find('.light-2').removeClass('active')
					thisParent.find('.light-3').removeClass('active')
					thisParent.find('.light-4').removeClass('active')
				}
				if(thisValue == 1){
					thisParent.find('.light-1').addClass('active')
					thisParent.find('.light-2').removeClass('active')
					thisParent.find('.light-3').removeClass('active')
					thisParent.find('.light-4').removeClass('active')
				};
				if(thisValue == 2){
					thisParent.find('.light-1').addClass('active')
					thisParent.find('.light-2').addClass('active')
					thisParent.find('.light-3').removeClass('active')
					thisParent.find('.light-4').removeClass('active')
				};
				if(thisValue == 3){
					thisParent.find('.light-1').addClass('active')
					thisParent.find('.light-2').addClass('active')
					thisParent.find('.light-3').addClass('active')
					thisParent.find('.light-4').removeClass('active')
				};
				if(thisValue == 4){
					thisParent.find('.light-1').addClass('active')
					thisParent.find('.light-2').addClass('active')
					thisParent.find('.light-3').addClass('active')
					thisParent.find('.light-4').addClass('active')
				};
			})
			if(thisLevel==thisValue){
				thisParent.find('.light-1').removeClass('active')
				thisParent.find('.light-2').removeClass('active')
				thisParent.find('.light-3').removeClass('active')
				thisParent.find('.light-4').removeClass('active')
			}
			if(!haskey){
				maskPage.data.career_interest.push(thisInterest);
				$(this).addClass('active')
			}else{
				if(maskPage.data.career_interest.indexOf(thisInterest)===-1){
					maskPage.data.career_interest.splice(tmpIndex,1,thisInterest);
					$(this).toggleClass('active');
					$(this).siblings().removeClass('active')
				}else{
					var i = maskPage.data.career_interest.indexOf(thisInterest)
					thisInterest = thisId +'-'+ 0;
					maskPage.data.career_interest.splice(i,1,thisInterest);
					$(this).removeClass('active');
				}	
			};
			maskPage.showLevelBtn();

			console.log(maskPage.data.career_interest)

		},
		showLevelBtn:function(){
			var arrLevel = []
			maskPage.data.career_interest.forEach((data,index)=>{
				let l_key = data.split('-')[1];
				arrLevel.push(Number(l_key))
				console.log(arrLevel)
				if(arrLevel.indexOf(0)>=0){
					$('#level-apply-btn').removeClass('active')
				}else{
					$('#level-apply-btn').addClass('active')
				};
			})
		},
		interestLevelLineOver:function(){
			let level = this.getAttribute('data-value');
			var lineIndex = null;
			switch(level){
			    case '1':
			    lineIndex = 1;
			    break;
			    case '2':
			    lineIndex = 2;
			    break;
			    case '3':
			    lineIndex = 3;
			    break;
			    case '4':
			    lineIndex = 4;
			    break;
			}
			var thisParent = $(this).parents('.level-list');
			thisParent.find('span').removeClass('active');
			thisParent.children(`span:lt(${lineIndex})`).addClass('active')
		},
		interestLevelLineOut:function(){
            let dataId = this.getAttribute('data-id');
            var level = ''

            maskPage.data.career_interest.forEach(function(data,index){
                data = data.split("-")
                if(data[0] == dataId){
                    level = data[1]
                }
            })

            var lineIndex = null;
            switch(level){
                case '1':
                lineIndex = 1;
                break;
                case '2':
                lineIndex = 2;
                break;
                case '3':
                lineIndex = 3;
                break;
                case '4':
                lineIndex = 4;
                break;
            }
            var thisParent = $(this).parents('.level-list');
			thisParent.find('span').removeClass('active');
			thisParent.children(`span:lt(${lineIndex})`).addClass('active');
        },
		preSecondSectionShow:function(){
			maskPage.showSecondTemplete();
		},
		showFourthTemplete:function(){
			let setImgCode = maskPage.setImgCode();
			let html = `
			<div class="maskshield"></div>
				<div class="binding-section">
				<div class="close-btn">
					<img src="./images/close.png" alt="logo">
				</div>
				<div class="head-box">
					<div class="title-container">
						<p class="title">绑定手机 完成认证</p>
						<p class="title-desc">请您绑定手机防止账号丢失和被盗，手机号可用于登录和找回密码。</p>
					</div>
				</div>
				<div class="content-box">
					<div class="form-phone-number">
						<input type="text" value placeholder="请输入手机号码" class="phone-number" id="phone-number" name="phone-number">
						<span class="alert-number"></span>
					</div>
					<div class="form-verify-code">
						<input type="text" value placeholder="请输入验证码" class="verify-code" id="verify-code" name="verify-code">
						<span class="alert-code"></span>
						<div class="verify-pic">
							<img src="${setImgCode}" alt="">
						</div>
					</div>
					<div class="form-dynamic-code">
						<input type="text" value placeholdere="请输入动态码" class="dynamic-code" id="dynamic-code" name="dynamic-code">
						<button type="button"  class="dynamic-code-send" id="dynamic-code-send" name="dynamic-code-send">获取</button>
					</div>
				</div>
				<div class="check-box">
					<button class="binding-btn" id="binding-btn">绑定手机</button>
				</div>
			</div>`
			$('.mask-container').html(html);
		},
		setImgCode:function(){
			let getImgCodeUrl = 'https://huodong.jikexueyuan.com/jike1024/verifyCode';
            var imgCode = getImgCodeUrl+ '?' + new Date().getTime();
            return imgCode;
		},
		dynamicCodeSend:function(){
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		    var phone = $('#phone-number').val()
		    var flag = myreg.test(phone)
		    var myreg2 = /^\d{4}$/;
			var code  = $('#verify-code').val();
			var flag2 = myreg2.test(code);
			if($('#phone-number').val()==""){
				$('#phone-number').css('border','1px solid red');
				$('.alert-number').text('不能为空');
			}else{
			    if(flag){
			    	$('#phone-number').css('border','1px solid #e4e4e4');
					$('.alert-number').text('')
			    }else{
			    	$('.alert-number').text('输入错误')
			    }
			};
			if($('#verify-code').val()==""){
				$('#verify-code').css('border','1px solid red');
				$('.alert-code').text('不能为空');
			}else{
				if(flag2){
					$('#verify-code').css('border','1px solid #e4e4e4');
					$('.alert-code').text('');
				}else{
					$('.alert-code').text('输入错误');
				}
			};
			if(flag&&flag2){
				maskPage.countDown();
			};
		},
		countDown:function(){
			let count = 60;
			var st = setInterval(()=>{
				if (count > 1) {
					count --;
					console.log(count)
					let dynamicCodeSendCount =  '已发送'+'' + '(' + count + ')';
					$('#dynamic-code-send').text(dynamicCodeSendCount);
					$('#dynamic-code-send').attr('disabled', true);
				}else{
					clearInterval(st);
					$('#dynamic-code-send').text('获取');
					$('#dynamic-code-send').attr('disabled', false);
				}
			},1000);
			
		},
		entryDynamicCode:function(e){
			if($(this).val()!==""){
				$('#binding-btn').addClass('active')
			}else{
				$('#binding-btn').removeClass('active');
			};
		},
		showFifthTemplete:function(){
			let html = `
			<div class="maskshield"></div>
			<div class="finish-section">
				<div class="close-btn">
					<img src="./images/close.png" alt="logo">
				</div>
				<div class="head-box">
					<div class="user-avatar">
						<img src="./images/head.png" alt="logo">
					</div>
					<p class="user-name">jikeRyan</p>
					<p class="title">恭喜，完成认证！</p>
					<p class="title-desc">现在你可以免费观看 80% 以上会员课程</p>
					<a href="javascript:;">马上去学习 >></a>
				</div>
				<div class="content-box">
					<p class="recommend">为您推荐如下课程</p>
					<p class="list-title">职业学院</p>
					<div class="lesson-list">
						<div class="lesson-item">
							<div class="lesson-img">
								<img src="./images/class.png" alt="logo">
							</div>
							<div class="lesson-detail">
								<p class="lesson-name">Python Web 工程师成长计划</p>
								<p class="lesson-count">2314 人正在学习</p>
							</div>
							<a href="javascript:;"></a>
						</div>
						<div class="lesson-item">
							<div class="lesson-img">
								<img src="./images/class.png" alt="logo">
							</div>
							<div class="lesson-detail">
								<p class="lesson-name">Go 工程师成长计划</p>
								<p class="lesson-count">2314 人正在学习</p>
							</div>
							<a href="javascript:;"></a>
						</div>
					</div>
					<p class="list-title">会员课程</p>
					<div class="member-list">
						<li class="list-item"><a href="javascript:;">Tornado 开发--TCP 编程</a></li>
						<li class="list-item"><a href="javascript:;">开发远程控制程序高级功能</a></li>
						<li class="list-item"><a href="javascript:;">网页控制电脑</a></li>
						<li class="list-item"><a href="javascript:;">Python 类深入</a></li>
						<li class="list-item"><a href="javascript:;">Python 类初步</a></li>
						<li class="list-item"><a href="javascript:;">Python 初级项目：远程操控电脑</a></li>
					</div>
				</div>
			</div>`
			$('.mask-container').html(html);
		}
	}
	maskPage.init();
})