import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Locale = 'en' | 'ar';
type Translation = { en: string; ar: string };
const copy: Record<string, Translation> = {
  home:{en:'Home',ar:'الرئيسية'}, services:{en:'Services',ar:'الخدمات'}, projects:{en:'Projects',ar:'المشاريع'}, about:{en:'About',ar:'من نحن'}, contact:{en:'Contact',ar:'تواصل معنا'}, start:{en:'Start a Project',ar:'ابدأ مشروعك'}, explore:{en:'Explore Our Work',ar:'استكشف أعمالنا'}, viewServices:{en:'View All Services',ar:'عرض جميع الخدمات'}, viewProjects:{en:'View All Projects',ar:'عرض جميع المشاريع'}, learn:{en:'Learn More',ar:'اعرف المزيد'}, fullStack:{en:'See Our Full Stack',ar:'استكشف تقنياتنا'},
  software:{en:'SOFTWARE ENGINEERING · DIGITAL SOLUTIONS · REAL IMPACT',ar:'هندسة برمجيات · حلول رقمية · أثر حقيقي'}, whatWeDo:{en:'WHAT WE DO',ar:'ماذا نقدم'}, featured:{en:'FEATURED WORK',ar:'أعمال مختارة'}, why:{en:'WHY CHOOSE US',ar:'لماذا نحن'}, process:{en:'OUR PROCESS',ar:'منهجية العمل'}, tech:{en:'TECHNOLOGY STACK',ar:'التقنيات'}, heroTitle:{en:'Turning Ideas Into Powerful Software Solutions',ar:'نحوّل الأفكار إلى حلول برمجية مؤثرة'}, heroBody:{en:'VT Visions Tech is a software engineering company that helps businesses design, build, and scale digital products.',ar:'في VT Visions Tech نساعد الشركات على تصميم المنتجات الرقمية وبنائها وتوسيعها من خلال هندسة برمجيات مدروسة.'}, ourServices:{en:'Our Services',ar:'خدماتنا'}, selected:{en:'Selected Projects',ar:'مشاريع مختارة'}, partner:{en:'A Partner for Long-Term Success',ar:'شريك لنجاح طويل الأمد'}, processTitle:{en:'From Idea to Impact',ar:'من الفكرة إلى الأثر'}, tools:{en:'Tools We Work With',ar:'التقنيات التي نستخدمها'}, ctaTitle:{en:'Let’s Build Something Great Together',ar:'لنبنِ شيئاً عظيماً معاً'},
  aboutHero:{en:'A Trusted Software Engineering Partner',ar:'شريك موثوق في هندسة البرمجيات'}, mission:{en:'Our Mission',ar:'رسالتنا'}, vision:{en:'Our Vision',ar:'رؤيتنا'}, values:{en:'Our Values',ar:'قيمنا'}, culture:{en:'A People-First Culture',ar:'ثقافة تضع الإنسان أولاً'}, team:{en:'Meet the Team Behind the Work',ar:'تعرّف على فريق العمل'}, contactHero:{en:'Let’s Build Something Great Together',ar:'لنبنِ شيئاً عظيماً معاً'}, getInTouch:{en:'Get In Touch',ar:'تواصل معنا'}, inquiry:{en:'Project Inquiry Form',ar:'نموذج طلب مشروع'}, send:{en:'Send Message',ar:'إرسال الرسالة'}, required:{en:'Please complete the required fields above.',ar:'يرجى إكمال الحقول المطلوبة أعلاه.'}, honest:{en:'Thanks — your enquiry is ready to send. Please email us directly while a submission backend is connected.',ar:'شكراً — طلبك جاهز للإرسال. يرجى مراسلتنا مباشرة إلى أن يتم ربط خدمة الإرسال.'}, faq:{en:'Common Questions',ar:'الأسئلة الشائعة'}, next:{en:'What Happens Next',ar:'ماذا يحدث بعد ذلك'}, notFound:{en:'This page took a different route.',ar:'اتخذت هذه الصفحة مساراً مختلفاً.'}, backHome:{en:'Back to Home',ar:'العودة إلى الرئيسية'}
};

@Injectable({providedIn:'root'})
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  readonly locale = signal<Locale>(this.readLocale());
  constructor(){ this.apply(this.locale()); }
  t(key:string):string { const value=copy[key]; return value ? value[this.locale()] : key; }
  pick<T extends {en:string; ar:string}>(value:T):string { return this.locale()==='ar' ? value.ar : value.en; }
  setLocale(locale:Locale):void { this.locale.set(locale); localStorage.setItem('vt-locale',locale); this.apply(locale); }
  toggle():void { this.setLocale(this.locale()==='en'?'ar':'en'); }
  private readLocale():Locale { const value=localStorage.getItem('vt-locale'); return value==='ar'?'ar':'en'; }
  private apply(locale:Locale):void { this.document.documentElement.lang=locale; this.document.documentElement.dir=locale==='ar'?'rtl':'ltr'; }
}
